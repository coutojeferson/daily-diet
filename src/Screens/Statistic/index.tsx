import { BestSequence } from '../../components/BestSequence';
import { CardMealsFeedback } from '../../components/CardMealsFeedback';
import { FeedBackStyleCard } from '../../components/CardMealsFeedback/styles';
import { Header } from '../../components/Header';
import {
  Container,
  ContainerBody,
  ContainerCardFeedback,
  ContainerHeader,
  ContainerHeaderInfo,
  DescriptionPersent,
  Persent,
  Title,
} from './styles';

type Props = {
  type: FeedBackStyleCard;
};
export function Statistic({ type = 'PRIMARY' }: Props) {
  return (
    <Container type={type}>
      <ContainerHeader>
        <ContainerHeaderInfo>
          <Header back icon="arrow-back" type={type} />
          <Persent>90.86%</Persent>
          <DescriptionPersent>das refeições dentro da dieta</DescriptionPersent>
        </ContainerHeaderInfo>
      </ContainerHeader>
      <ContainerBody>
        <Title>Estatísticas gerais</Title>
        <BestSequence
          number={22}
          description="melhor sequência de pratos dentro da dieta"
        />
        <BestSequence number={109} description="refeições registradas" />
        <ContainerCardFeedback>
          <CardMealsFeedback
            number={99}
            description="refeições dentro da dieta"
            type="PRIMARY"
          />
          <CardMealsFeedback
            number={10}
            description="refeições fora da dieta"
            type="SECONDARY"
          />
        </ContainerCardFeedback>
      </ContainerBody>
    </Container>
  );
}
