import React from 'react';

import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import perfilImg from '../../assets/perfil.png';
import { MaterialIcons } from '@expo/vector-icons';

import { backIconStyleProps, Container, Icon, Logo, Perfil } from './styles';

type Props = {
  back?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: backIconStyleProps;
};

export function Header({ icon, back = false, type = 'PRIMARY' }: Props) {
  return (
    <Container>
      {!back ? (
        <>
          <Logo source={logoImg} />
          <Perfil source={perfilImg} />
        </>
      ) : (
        <Icon name={icon} type={type} />
      )}
    </Container>
  );
}
