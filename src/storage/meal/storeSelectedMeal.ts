import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_SELECTED } from '../storageConfig';
import { MealStorageDTO } from './MealStorageDTO';

export async function storeSelectedMeal(mealSelected: MealStorageDTO) {
  try {
    const storage = JSON.stringify([mealSelected]);

    await AsyncStorage.setItem(MEAL_SELECTED, storage);
  } catch (error) {
    throw error;
  }
}
