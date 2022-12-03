import { TouchableOpacityProps } from 'react-native';
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

type Props = TouchableOpacityProps & {
  type?: StatusTypeStyleProps;
  name: string;
  date: string;
  hour: string;
};

export function MealsForDays({
  type = 'PRIMARY',
  name,
  date,
  hour,
  ...rest
}: Props) {
  const data = '12.08.22';
  return (
    <Container {...rest}>
      <Date>{date}</Date>
      <MealsContainer>
        <MealTime>{hour}</MealTime>
        <Divider />
        <Meal>{name}</Meal>
        <Status type={type} />
      </MealsContainer>
    </Container>
  );
}
