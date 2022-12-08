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
import { storeSelectedMeal } from '../../storage/meal/storeSelectedMeal';

export function DashBoard() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [intoDiet, setIntoDiet] = useState(0);
  const navigation = useNavigation();

  async function handleSelectMeal(meal: MealStorageDTO) {
    try {
      await storeSelectedMeal(meal);
      navigation.navigate('mealSelected');
    } catch (error) {
      console.log(error);
    }
  }

  function handleNewMeal() {
    navigation.navigate('newmeal', { screen: 'create' });
  }

  function handleStatistic() {
    navigation.navigate('statistic');
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      console.log(data);
      setMeals(data);
      const intoDiet = data.filter((meal) => meal.intoDiet === 'Sim');
      percentIntoDiet(data.length, intoDiet.length);
    } catch (error) {
      console.log(error);
    }
  }

  function percentIntoDiet(total: number, intoDiet: number) {
    const percent = (total * 100) / total;

    const percentIntoDiet = (intoDiet * 100) / total;

    setIntoDiet(Math.round(percentIntoDiet));
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, []),
  );

  return (
    <Container>
      <Header />
      <PercentCard
        icon="arrow-up-right"
        onPress={handleStatistic}
        value={intoDiet}
        type={intoDiet >= 50 ? 'PRIMARY' : 'SECONDARY'}
      />
      <MealSection>
        <Title>Refeições</Title>
        <Button title="Nova refeição" icon="plus" onPress={handleNewMeal} />
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
              onPress={() => handleSelectMeal(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
