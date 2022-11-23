import React from 'react';

import { View } from 'react-native';

import { Container, Form, Title } from './styles';

type Props = {
  text: string;
  height?: number;
  width?: number;
};

export function Input({ text, height, width }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
      <Form style={{ width: width, height: height }} />
    </Container>
  );
}
