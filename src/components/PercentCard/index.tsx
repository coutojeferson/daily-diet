import React from 'react';

import { View, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  ContainerIcon,
  ContainerPersent,
  HeaderIcon,
  Persent,
  DescriptionPersent,
  IconTypeStyleProps,
} from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: IconTypeStyleProps;
};
export function PercentCard({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <ContainerIcon>
        <HeaderIcon name={icon} type={type} />
      </ContainerIcon>
      <ContainerPersent>
        <Persent>90,86%</Persent>
        <DescriptionPersent>das refeições dentro da dieta</DescriptionPersent>
      </ContainerPersent>
    </Container>
  );
}
