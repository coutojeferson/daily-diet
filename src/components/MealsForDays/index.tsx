import {
  Container,
  Date,
  Divider,
  Status,
  Meal,
  MealTime,
  MealsContainer,
  StatusTypeStyleProps,
} from './styles';

type Props = {
  type?: StatusTypeStyleProps;
};

export function MealsForDays({ type = 'PRIMARY' }: Props) {
  const data = '12.08.22';
  return (
    <Container>
      {<Date>{data}</Date>}
      <MealsContainer>
        <MealTime>20:00</MealTime>
        <Divider />
        <Meal>X-Tudo</Meal>
        <Status type={type} />
      </MealsContainer>
    </Container>
  );
}
