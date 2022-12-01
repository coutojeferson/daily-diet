import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealsGetAll } from './mealGetAll';
import { mealGetByDate } from './mealGetByDate';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealAddByDate(newMeal: MealStorageDTO, date: string) {
  try {
    const storedMeals = await mealGetByDate(date);

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, storage);
  } catch (error) {
    throw error;
  }
}
