import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION, MEAL_STATISTIC } from '../storageConfig';
import { MealStorageDTO } from './MealStorageDTO';
import { StatisticMealStorageDTO } from './StatisticMealStorageDTO';

export async function getStatistics() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_STATISTIC);
    const mealsStatistics: StatisticMealStorageDTO[] = storage
      ? JSON.parse(storage)
      : [];
    return mealsStatistics;
  } catch (error) {
    throw error;
  }
}
