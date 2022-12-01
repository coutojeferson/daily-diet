import { useNavigation } from '@react-navigation/native';
import React from 'react';
import unsuccessImg from '../../assets/unsuccess.png';
import { Button } from '../../components/Button';

import {
  Container,
  Title,
  Subtitle,
  SubtitleBold,
  UnsuccessImg,
} from './styles';

export function Unsuccess() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Que pena!</Title>
      <Subtitle>
        Você <SubtitleBold>saiu da dieta</SubtitleBold> dessa vez, mas continue
        se esforçando e não desista!
      </Subtitle>
      <UnsuccessImg source={unsuccessImg} />
      <Button
        title="Ir para a página inicial"
        width={false}
        onPress={() => navigation.navigate('dashboard')}
      />
    </Container>
  );
}
