import React, { useState, useRef, useEffect } from 'react';
import { Alert, FlatList, TextInput, View } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonDiet } from '../../components/ButtonDiet';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { mealCreate } from '../../storage/meal/mealCreate';
import { mealsGetAll } from '../../storage/meal/mealGetAll';
import { mealAddByDate } from '../../storage/meal/mealAddByDate';

import {
  Container,
  ContainerHeader,
  Form,
  ContainerDateTime,
  ContainerButton,
  Content,
} from './styles';
import { getMealSelected } from '../../storage/meal/getMealSelected';
import { MealStorageDTO } from '../../storage/meal/MealStorageDTO';
import { mealEdit } from '../../storage/meal/mealEdit';

type RouteParams = {
  screen: string;
};

export function NewMeal() {
  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [mealToEdit, setMealToEdit] = useState<MealStorageDTO[]>([]);
  const [isActiveYes, setIsActiveYes] = useState(false);
  const [isActiveNo, setIsActiveNo] = useState(false);
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  // const [mealSelected, setMealSelected] = useState();

  const newMealInputsRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { screen } = route.params as RouteParams;

  async function editMeal() {
    const mealsToEdit = await getMealSelected();
    console.log('Veio para ser editado', mealsToEdit);
    mealsToEdit.map((meal) => {
      setSelected(meal.intoDiet);
      setName(meal.name);
      setDescription(meal.description);
      setDate(meal.date);
      setHour(meal.hour);
    });
    setMealToEdit(mealsToEdit);
  }

  async function handleNewMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      date.trim().length === 0 ||
      hour.trim().length === 0 ||
      selected.trim().length === 0
    ) {
      return Alert.alert(
        'Nova refeição',
        'Você deixou algum campo sem preencher.',
      );
    }
    const newMeal = {
      name,
      description,
      date,
      hour,
      intoDiet: selected,
    };
    try {
      await mealCreate(newMeal);
      newMealInputsRef.current?.blur();
      setSelected('');
      setName('');
      setDescription('');
      setDate('');
      setHour('');
      newMeal.intoDiet === 'Sim'
        ? navigation.navigate('success')
        : navigation.navigate('unsuccess');
    } catch (error) {
      console.log(error);
    }
  }

  // function insertMealSelected(mealSelected: MealStorageDTO) {
  //   setMealSelected(mealSelected.description);
  // }
  async function handleEditMeal() {
    const newMeal = {
      name,
      description,
      date,
      hour,
      intoDiet: selected,
    };
    try {
      const meals = await mealsGetAll();
      const mealSelectedAsync = await getMealSelected();
      // mealSelectedAsync.map(
      //   (mealSelected) => console.log(mealSelected.description),
      //   insertMealSelected(mealSelected),
      // );

      const differentMeals = meals.filter((meals) => {
        let meal;
        mealSelectedAsync.map((mealSelected) => {
          console.log('Já temos', meals);
          console.log('Selecionamos', mealSelected);
          meal = mealSelected;
        });
        const different = meals.description !== meal.description;

        console.log('Diferença', different);
        return different;
      });

      // console.log('Refeições diferentes', differentMeals);

      const editedMeal = [...differentMeals, newMeal];
      console.log('Oque tem aqui', editedMeal);
      editedMeal.map((mealEdited) => console.log('Como ficou: ', mealEdited));
      const mealsDeNovo = await mealsGetAll();

      console.log('Mudou??', mealsDeNovo);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (screen === 'edit') {
      editMeal();
    }
  }, []);

  return (
    <Container>
      <ContainerHeader>
        <Header
          back
          icon="arrow-back"
          text={screen === 'edit' ? 'Editar refeição' : 'Nova refeição'}
        />
      </ContainerHeader>
      <Content>
        {screen === 'edit' ? (
          mealToEdit.map((meal) => (
            <Form>
              <Input
                inputRef={newMealInputsRef}
                text="Nome"
                onChangeText={setName}
                value={name}
              />
              <Input
                inputRef={newMealInputsRef}
                text="Descrição"
                height={142}
                onChangeText={setDescription}
                value={description}
              />
              <ContainerDateTime>
                <Input
                  inputRef={newMealInputsRef}
                  text="Data"
                  width={150}
                  onChangeText={setDate}
                  value={date}
                />
                <Input
                  inputRef={newMealInputsRef}
                  text="Hora"
                  width={150}
                  onChangeText={setHour}
                  value={hour}
                />
              </ContainerDateTime>
            </Form>
          ))
        ) : (
          <Form>
            <Input
              inputRef={newMealInputsRef}
              text="Nome"
              onChangeText={setName}
              value={name}
            />
            <Input
              inputRef={newMealInputsRef}
              text="Descrição"
              height={142}
              onChangeText={setDescription}
              value={description}
            />
            <ContainerDateTime>
              <Input
                inputRef={newMealInputsRef}
                text="Data"
                width={150}
                onChangeText={setDate}
                value={date}
              />
              <Input
                inputRef={newMealInputsRef}
                text="Hora"
                width={150}
                onChangeText={setHour}
                value={hour}
              />
            </ContainerDateTime>
          </Form>
        )}

        {screen === 'edit' ? (
          mealToEdit.map((meal) => (
            <View style={{ flexDirection: 'row' }}>
              <ButtonDiet
                type="PRIMARY"
                title="Sim"
                isActive={
                  screen === 'edit' && meal.intoDiet === 'Sim'
                    ? !isActiveYes
                    : 'Sim' === selected
                }
                onPress={() => {
                  setSelected('Sim');
                  setIsActiveNo(!isActiveNo);
                  setIsActiveYes(!isActiveYes);
                }}
              />
              <ButtonDiet
                type="SECONDARY"
                title="Não"
                isActive={
                  screen === 'edit' && meal.intoDiet === 'Não'
                    ? !isActiveNo
                    : 'Não' === selected
                }
                onPress={() => {
                  setSelected('Não');
                  setIsActiveNo(!isActiveNo);
                  setIsActiveYes(!isActiveYes);
                }}
              />
            </View>
          ))
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <ButtonDiet
              type="PRIMARY"
              title="Sim"
              isActive={'Sim' === selected}
              onPress={() => {
                setSelected('Sim');
              }}
            />
            <ButtonDiet
              type="SECONDARY"
              title="Não"
              isActive={'Não' === selected}
              onPress={() => {
                setSelected('Não');
              }}
            />
          </View>
        )}

        <ContainerButton>
          <Button
            title={
              screen === 'edit' ? 'Salvar alterações' : 'Cadastrar refeição'
            }
            onPress={() =>
              screen === 'edit' ? handleEditMeal() : handleNewMeal()
            }
          />
        </ContainerButton>
      </Content>
    </Container>
  );
}
