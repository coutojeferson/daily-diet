import { StatusTypeStyleProps } from '../MealsForDays/styles';
import { Container, Total, TotalDescription } from './styles';

type Props = {
  number?: number;
  description: string;
  type: StatusTypeStyleProps;
};
export function CardMealsFeedback({
  type = 'PRIMARY',
  number,
  description,
}: Props) {
  return (
    <Container type={type}>
      <Total>{number}</Total>
      <TotalDescription>{description}</TotalDescription>
    </Container>
  );
}
