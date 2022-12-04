import React, { useState, useRef, useEffect } from 'react';
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
  ContainerButton,
  Content,
  Title,
  Subtitle,
  TitleDateHour,
  HeaderStylesProps,
} from './styles';
import { InfoStatus } from '../../components/InfoStatus';
import { getMealSelected } from '../../storage/meal/getMealSelected';
import { MealStorageDTO } from '../../storage/meal/MealStorageDTO';

export function MealSelected() {
  const [meal, setMeal] = useState<MealStorageDTO[]>([]);
  const [intoDiet, setIntoDiet] = useState('');
  const [mealName, setMealName] = useState('');
  const navigation = useNavigation();

  async function searchSelectedMeal() {
    try {
      const meal = await getMealSelected();
      setMeal(
        meal.map((meal) => {
          setIntoDiet(meal.intoDiet);
          setMealName(meal.name);
          return meal;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchSelectedMeal();
  }, []);

  return (
    <Container type={intoDiet === 'Sim' ? 'PRIMARY' : 'SECONDARY'}>
      <ContainerHeader>
        <Header back icon="arrow-back" text="Refeição" />
      </ContainerHeader>
      <Content>
        {meal.map((meal, index) => (
          <View key={index}>
            <Title>{meal.name}</Title>
            <Subtitle>{meal.description}</Subtitle>
            <TitleDateHour>Date e hora</TitleDateHour>
            <Subtitle>
              {meal.date} às {meal.hour}
            </Subtitle>
            <InfoStatus
              type={meal.intoDiet === 'Sim' ? 'PRIMARY' : 'SECONDARY'}
            />
          </View>
        ))}
        <ContainerButton>
          <Button
            title="Editar refeição"
            icon="edit-3"
            onPress={() => navigation.navigate('newmeal', { screen: 'edit' })}
          />
          <Button title="Excluir refeição" icon="trash-2" type="SECONDARY" />
        </ContainerButton>
      </Content>
    </Container>
  );
}
