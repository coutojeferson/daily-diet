import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION, MEAL_SELECTED } from '../storageConfig';
import { MealStorageDTO } from './MealStorageDTO';

export async function getMealSelected() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_SELECTED);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
