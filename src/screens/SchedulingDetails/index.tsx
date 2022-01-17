import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'; 
import { Button } from '../../components/Button'; 
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />

      </Header>
      <CarImages>
        <ImageSlider imagesUrl={[
          'https://cdn.yourpng.com/uploads/preview/red-audi-car-transparent-backgroundpng-images-download-30-11616833820yvj81uqamn.png']} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
        <Accessory name="340km/h" icon={speedSvg}/>
        <Accessory name="3.2s" icon={accelerationSvg}/>
        <Accessory name="800 HP" icon={forceSvg}/>
        <Accessory name="Gasolina" icon={gasolineSvg}/>
        <Accessory name="Auto" icon={exchangeSvg}/>
        <Accessory name="2 pessoas" icon={peopleSvg}/>
        
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name = 'calendar'
              size = {RFValue(24)}
              color = {theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/21</DateValue>
          </DateInfo>

            <Feather 
              name = 'chevron-right'
              size = {RFValue(10)}
              color = {theme.colors.text}
            />

          
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/21</DateValue>
          </DateInfo>

        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title='Confirmar' color={theme.colors.success}/>
      </Footer>
    </Container>
  );
}