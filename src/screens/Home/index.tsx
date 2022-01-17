import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import theme from '../../styles/theme';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList

} from './styles';

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupê',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.pngall.com/wp-content/uploads/2016/05/Audi-PNG.png',
  }
  
  return (
    <Container>
      <StatusBar barStyle="light-content"
        translucent
        backgroundColor='transparent' />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros.
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
      data={[1,2,3,7]}
      keyExtractor={item => String(item)}
      renderItem={({item})=> <Car data={carData}/>}
      />

    </Container>
  );
}