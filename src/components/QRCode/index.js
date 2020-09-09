import React from 'react';
// import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Code, Nav, NavItem, NavText} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <Icon name="person-outline" size={80} color="#333" />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Help</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Credit card</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Smartphone</NavText>
        </NavItem>
      </Nav>
    </Container>
  );
}
