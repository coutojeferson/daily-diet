import React from 'react';

import { View } from 'react-native';

import { Container, Form, Title } from './styles';

type Props = {
  text: string;
};

export function Input({ text }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
      <Form />
    </Container>
  );
}
