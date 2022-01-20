import React from 'react';
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
import { StatusBar } from 'react-native';
import { Calendar } from '../../components/Calendar';
import { CommonActions, useNavigation } from '@react-navigation/native';

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental() {
  
  
      navigation.dispatch(
        CommonActions.navigate({
          name: 'SchedulingDetails',
        })
      );
  
    }
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton onPress={() => { }} color={theme.colors.shape} />
                <Title>
                    Escolha uma {'\n'}
                    data de início e{'\n'}
                    fim do aluguel{'\n'}
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/21</DateValue>
                    </DateInfo>

                <ArrowSvg />
                
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/21</DateValue>
                    </DateInfo>
                </RentalPeriod>

            </Header>

            <Content>
                <Calendar />
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental}/>
            </Footer>

        </Container>
    );
}