import React from 'react';

import { View } from 'react-native';

type Props = {
  type: StatusStyleProps;
};

import { Container, Status, StatusStyleProps, Title } from './styles';

export function InfoStatus({ type }: Props) {
  return (
    <Container>
      <Status type={type} />
      <Title>dentro da dieta</Title>
    </Container>
  );
}
