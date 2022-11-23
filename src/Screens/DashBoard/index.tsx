import React from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MealsForDays } from '../../components/MealsForDays';
import { PercentCard } from '../../components/PercentCard';
import { Container, MealSection, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

export function DashBoard() {
  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('newmeal');
  }

  function handleStatistic() {
    navigation.navigate('statistic');
  }
  return (
    <Container>
      <Header />
      <PercentCard icon="arrow-up-right" onPress={handleStatistic} />
      <MealSection>
        <Title>Refeições</Title>
        <Button title="Nova refeição" icon="add" onPress={handleNewMeal} />
      </MealSection>
      <MealsForDays type="SECONDARY" />
      <MealsForDays type="SECONDARY" />
    </Container>
  );
}
