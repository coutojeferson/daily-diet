import React, { useState } from 'react';

import { TouchableOpacityProps, View } from 'react-native';

import {
  Container,
  Title,
  StyleProps,
  StatusButton,
  ButtonStyle,
} from './styles';

type Props = TouchableOpacityProps &
  StyleProps & {
    title: string;
    type: ButtonStyle;
  };
export function ButtonDiet({ title, type, isActive = false, ...rest }: Props) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <StatusButton type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
