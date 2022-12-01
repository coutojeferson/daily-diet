import { useNavigation } from '@react-navigation/native';
import React from 'react';
import successImg from '../../assets/success.png';
import { Button } from '../../components/Button';

import { Container, Title, Subtitle, SubtitleBold, SuccessImg } from './styles';

export function Success() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>
        Você continua <SubtitleBold>dentro da dieta.</SubtitleBold> Muito bem!
      </Subtitle>
      <SuccessImg source={successImg} />
      <Button
        title="Ir para a página inicial"
        width={false}
        onPress={() => navigation.navigate('dashboard')}
      />
    </Container>
  );
}
