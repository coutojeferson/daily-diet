import React from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MealsForDays } from '../../components/MealsForDays';
import { PercentCard } from '../../components/PercentCard';
import { Container, MealSection, Title } from './styles';

export function DashBoard() {
  return (
    <Container>
      <Header />
      <PercentCard icon="arrow-up-right" />
      <MealSection>
        <Title>Refeições</Title>
        <Button icon="add" />
      </MealSection>
      <MealsForDays type="SECONDARY" />
    </Container>
  );
}
