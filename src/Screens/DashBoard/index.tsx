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
import { mealStatistics } from '../../storage/meal/mealStatistics';
import { getStatistics } from '../../storage/meal/getStatistics';

export function DashBoard() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [intoDietPercent, setIntoDietPercent] = useState(0);
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
      const offDiet = data.filter((meal) => meal.intoDiet === 'Não');
      percentIntoDiet(data.length, intoDiet.length);
      mealsStatisticCreate(
        intoDiet.length,
        offDiet.length,
        intoDietPercent,
        data.length,
      );
    } catch (error) {
      console.log(error);
    }
  }

  function percentIntoDiet(total: number, intoDiet: number) {
    const percentIntoDiet = (intoDiet * 100) / total;

    setIntoDietPercent(Math.round(percentIntoDiet));
  }

  async function mealsStatisticCreate(
    intoDiet: number,
    offDiet: number,
    percent: number,
    total: number,
  ) {
    const newStatistic = {
      percent,
      bestSequence: total,
      total,
      intoDiet,
      offDiet,
    };
    try {
      await mealStatistics(newStatistic);
      const teste = await getStatistics();

      console.log('verificar', teste);
    } catch (error) {
      console.log(error);
    }
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
        value={intoDietPercent}
        type={intoDietPercent >= 50 ? 'PRIMARY' : 'SECONDARY'}
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
