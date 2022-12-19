import React from 'react';

import { View } from 'react-native';

import { Container, Status, StatusStyleProps, Title } from './styles';

type Props = {
  type: StatusStyleProps;
};

export function InfoStatus({ type }: Props) {
  return (
    <Container>
      <Status type={type} />
      <Title>dentro da dieta</Title>
    </Container>
  );
}
