import React from 'react';

import { View, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  HeaderIcon,
  NumberPersent,
  DescriptionCard,
  IconTypeStyleProps,
  ContainerHeaderIcon,
  ContainerDescription,
} from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: IconTypeStyleProps;
};
export function PercentCard({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <ContainerHeaderIcon>
        <HeaderIcon name={icon} type={type} />
      </ContainerHeaderIcon>
      <ContainerDescription>
        <NumberPersent>90,86%</NumberPersent>
        <DescriptionCard>das refeitções dentro da dieta</DescriptionCard>
      </ContainerDescription>
    </Container>
  );
}
