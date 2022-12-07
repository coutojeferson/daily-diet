import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { getMealSelected } from './getMealSelected';
import { mealsGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealDelete() {
  try {
    const meals = await mealsGetAll();
    const mealSelectedAsync = await getMealSelected();

    const differentMeals = meals.filter((meals) => {
      let meal;
      mealSelectedAsync.map((mealSelected) => {
        meal = mealSelected;
      });
      const different = meals.description !== meal.description;
      return different;
    });

    const storage = JSON.stringify(differentMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
