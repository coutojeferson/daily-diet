import React, { useState, useRef } from 'react';
import { Alert, FlatList, TextInput, View } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonDiet } from '../../components/ButtonDiet';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { mealCreate } from '../../storage/meal/mealCreate';
import { mealsGetAll } from '../../storage/meal/mealGetAll';
import { mealAddByDate } from '../../storage/meal/mealAddByDate';

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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const newMealInputsRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  async function handleNewMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      date.trim().length === 0 ||
      hour.trim().length === 0 ||
      selected.trim().length === 0
    ) {
      return Alert.alert(
        'Nova refeição',
        'Você deixou algum campo sem preencher.',
      );
    }
    const newMeal = {
      name,
      description,
      date,
      hour,
      intoDiet: selected,
    };
    try {
      await mealCreate(newMeal);
      newMealInputsRef.current?.blur();
      setSelected('');
      setName('');
      setDescription('');
      setDate('');
      setHour('');
      newMeal.intoDiet === 'Sim'
        ? navigation.navigate('success')
        : navigation.navigate('unsuccess');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <ContainerHeader>
        <Header back icon="arrow-back" text="Nova refeição" />
      </ContainerHeader>
      <Content>
        <Form>
          <Input
            inputRef={newMealInputsRef}
            text="Nome"
            onChangeText={setName}
            value={name}
          />
          <Input
            inputRef={newMealInputsRef}
            text="Descrição"
            height={142}
            onChangeText={setDescription}
            value={description}
          />
          <ContainerDateTime>
            <Input
              inputRef={newMealInputsRef}
              text="Data"
              width={150}
              onChangeText={setDate}
              value={date}
            />
            <Input
              inputRef={newMealInputsRef}
              text="Hora"
              width={150}
              onChangeText={setHour}
              value={hour}
            />
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
          <Button title="Cadastrar refeição" onPress={() => handleNewMeal()} />
        </ContainerButton>
      </Content>
    </Container>
  );
}
