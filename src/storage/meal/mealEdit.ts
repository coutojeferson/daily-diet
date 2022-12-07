import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { getMealSelected } from './getMealSelected';
import { mealsGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealEdit(
  newMeal: MealStorageDTO,
  // oldMeal: MealStorageDTO,
) {
  try {
    const meals = await mealsGetAll();
    const mealSelectedAsync = await getMealSelected();

    const differentMeals = meals.filter((meals) => {
      let meal;
      mealSelectedAsync.map((mealSelected) => {
        // console.log('Já temos', meals);
        // console.log('Selecionamos', mealSelected);
        meal = mealSelected;
      });
      const different = meals.description !== meal.description;

      // console.log('Diferença', different);
      return different;
    });

    const storage = JSON.stringify([...differentMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
