import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,

} from './styles';
import { Alert, StatusBar } from 'react-native';
import { Calendar,
         DayProps,
         generateInterval,
         MarkedDateProps
         } from '../../components/Calendar';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format, parseISO } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
  }

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car }= route.params as Params;

    function handleGoBack() {
      navigation.goBack();
    }

    function handleConfirmRental() {
        if (!rentalPeriod.startFormatted||!rentalPeriod.endFormatted) {
            Alert.alert('Selecione o intervalo para alugar.')
        } else {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'SchedulingDetails',
          params: {
              car,
              dates: Object.keys(markedDates)
          },
        })
      );
        }
    }

    function handleChangeDay(date: DayProps) {

        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
          start = end;
          end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);  
        
        const fistDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length -1];
        setRentalPeriod({
            startFormatted: format(getPlatformDate(parseISO(fistDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(parseISO(endDate)), 'dd/MM/yyyy'),

        })
    }
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton onPress={handleGoBack} color={theme.colors.shape} />
                <Title>
                    Escolha uma {'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>

                <ArrowSvg />
                
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>

            </Header>

            <Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDay}
                />
            </Content>
            <Footer>
                <Button enabled={!!rentalPeriod.startFormatted} title="Confirmar" onPress={handleConfirmRental}/>
            </Footer>

        </Container>
    );
}