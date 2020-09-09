import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/restaurant_logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Hari Dasa</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#003366" />
    </Container>
  );
}
