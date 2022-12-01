import React from 'react';

import { TextInput, TextInputProps } from 'react-native';

import { Container, Form, Title } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  text: string;
  height?: number;
  width?: number;
};

export function Input({ text, height, width, inputRef, ...rest }: Props) {
  return (
    <Container>
      <Title>{text}</Title>
      <Form ref={inputRef} style={{ width: width, height: height }} {...rest} />
    </Container>
  );
}
