import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerDateTime,
} from './styles';

export function NewMeal() {
  return (
    <Container>
      <ContainerHeader>
        <Header back icon="arrow-back" text="Nova refeição" />
      </ContainerHeader>
      <ContainerBody>
        <Input text="Sanduíche" />
        <Input text="Descrição" />
        <ContainerDateTime>
          <Input text="Data" />
          <Input text="Hora" />
        </ContainerDateTime>
      </ContainerBody>
    </Container>
  );
}
