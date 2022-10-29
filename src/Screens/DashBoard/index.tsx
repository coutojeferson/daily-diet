import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { PercentCard } from '../../components/PercentCard';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import { Container, Title } from './styles';

// import { styles } from './styles';

export function DashBoard() {
  return (
    <Container>
      <Header />
      <PercentCard icon="arrow-up-right" />
    </Container>
  );
}
