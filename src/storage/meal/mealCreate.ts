import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealsGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();
    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
