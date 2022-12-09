import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION, MEAL_STATISTIC } from '../storageConfig';
import { mealsGetAll } from './mealGetAll';
import { StatisticMealStorageDTO } from './StatisticMealStorageDTO';

export async function mealStatistics(newStatistic: StatisticMealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();
    const storage = JSON.stringify([newStatistic]);

    await AsyncStorage.setItem(MEAL_STATISTIC, storage);
  } catch (error) {
    throw error;
  }
}
