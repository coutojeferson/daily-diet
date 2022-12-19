import { useEffect, useState } from 'react';
import { BestSequence } from '../../components/BestSequence';
import { CardMealsFeedback } from '../../components/CardMealsFeedback';
import { FeedBackStyleCard } from '../../components/CardMealsFeedback/styles';
import { Header } from '../../components/Header';
import { getStatistics } from '../../storage/meal/getStatistics';
import { StatisticMealStorageDTO } from '../../storage/meal/StatisticMealStorageDTO';
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
export function Statistic() {
  const [statistic, setStatistics] = useState<StatisticMealStorageDTO>();
  async function fetchStatistics() {
    try {
      const statistic = await getStatistics();

      statistic.map((statistic) => {
        if (statistic) {
          setStatistics(statistic);
        } else {
          return;
        }

        console.log('Estatisticas', statistic);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <Container
      type={
        statistic?.percent !== undefined && statistic.percent >= 50
          ? 'PRIMARY'
          : 'SECONDARY'
      }
    >
      <ContainerHeader>
        <ContainerHeaderInfo>
          <Header
            back
            icon="arrow-back"
            type={
              statistic?.percent !== undefined && statistic.percent >= 50
                ? 'PRIMARY'
                : 'SECONDARY'
            }
          />
          <Persent>{statistic?.percent}%</Persent>
          <DescriptionPersent>das refeições dentro da dieta</DescriptionPersent>
        </ContainerHeaderInfo>
      </ContainerHeader>
      <ContainerBody>
        <Title>Estatísticas gerais</Title>
        <BestSequence
          number={statistic?.bestSequence}
          description="melhor sequência de pratos dentro da dieta"
        />
        <BestSequence
          number={statistic?.total}
          description="refeições registradas"
        />
        <ContainerCardFeedback>
          <CardMealsFeedback
            number={statistic?.intoDiet}
            description="refeições dentro da dieta"
            type="PRIMARY"
          />
          <CardMealsFeedback
            number={statistic?.offDiet}
            description="refeições fora da dieta"
            type="SECONDARY"
          />
        </ContainerCardFeedback>
      </ContainerBody>
    </Container>
  );
}
