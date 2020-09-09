import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/QRCode';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Total</Title>
            <Description>R$ 54.89</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Pedido: Almoço a lá chique</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
