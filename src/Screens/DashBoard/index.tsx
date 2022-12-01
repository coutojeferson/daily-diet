import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MealsForDays } from '../../components/MealsForDays';
import { PercentCard } from '../../components/PercentCard';
import { Container, MealSection, Title } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { mealsGetAll } from '../../storage/meal/mealGetAll';
import { MealStorageDTO } from '../../storage/meal/MealStorageDTO';
import { FlatList, View } from 'react-native';
import { mealGetByDate } from '../../storage/meal/mealGetByDate';

export function DashBoard() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('newmeal');
  }

  function handleStatistic() {
    navigation.navigate('statistic');
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      console.log(data);
      setMeals(data);
      // fetchMealsByDate();
    } catch (error) {
      console.log(error);
    }
  }

  // async function fetchMealsByDate() {
  //   console.log(meals, 'Trouxe??');
  //   try {
  //     const mealsByDate = await mealGetByDate(mea)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useFocusEffect(
    useCallback(() => {
      console.log('executou');
      fetchMeals();
    }, []),
  );

  return (
    <Container>
      <Header />
      <PercentCard icon="arrow-up-right" onPress={handleStatistic} />
      <MealSection>
        <Title>Refeições</Title>
        <Button title="Nova refeição" icon="add" onPress={handleNewMeal} />
      </MealSection>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <MealsForDays
              type={item.intoDiet === 'Sim' ? 'PRIMARY' : 'SECONDARY'}
              date={item.date}
              name={item.name}
              hour={item.hour}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
