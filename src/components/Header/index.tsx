import React from 'react';

import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import perfilImg from '../../assets/perfil.png';

import { Container, Logo, Perfil } from './styles';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Perfil source={perfilImg} />
    </Container>
  );
}
