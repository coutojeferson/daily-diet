import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonDiet } from '../../components/ButtonDiet';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import {
  Container,
  ContainerHeader,
  Form,
  ContainerDateTime,
  ContainerButton,
  Content,
} from './styles';

export function NewMeal() {
  const [selected, setSelected] = useState('');

  return (
    <Container>
      <ContainerHeader>
        <Header back icon="arrow-back" text="Nova refeição" />
      </ContainerHeader>
      <Content>
        <Form>
          <Input text="Sanduíche" />
          <Input text="Descrição" height={142} />
          <ContainerDateTime>
            <Input text="Data" width={150} />
            <Input text="Hora" width={150} />
          </ContainerDateTime>
        </Form>

        <View style={{ flexDirection: 'row' }}>
          <ButtonDiet
            type="PRIMARY"
            title="Sim"
            isActive={'Sim' === selected}
            onPress={() => setSelected('Sim')}
          />
          <ButtonDiet
            type="SECONDARY"
            title="Não"
            isActive={'Não' === selected}
            onPress={() => setSelected('Não')}
          />
        </View>

        <ContainerButton>
          <Button title="Cadastrar refeição" />
        </ContainerButton>
      </Content>
    </Container>
  );
}
