import { Container, Total, TotalDescription } from './styles';

type Props = {
  number: number;
  description: string;
};
export function BestSequence({ number, description }: Props) {
  return (
    <Container>
      <Total>{number}</Total>
      <TotalDescription>{description}</TotalDescription>
    </Container>
  );
}
