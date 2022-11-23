import React from 'react';

import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import perfilImg from '../../assets/perfil.png';
import { MaterialIcons } from '@expo/vector-icons';

import {
  backIconStyleProps,
  Container,
  ContainerHeader,
  DescriptionHeader,
  Icon,
  Logo,
  Perfil,
} from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  back?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: backIconStyleProps;
  text?: string;
};

export function Header({ icon, back = false, type = 'TERTIARY', text }: Props) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {!back ? (
        <>
          <Logo source={logoImg} />
          <Perfil source={perfilImg} />
        </>
      ) : (
        <ContainerHeader onPress={handleGoBack}>
          <Icon name={icon} type={type} />
          <DescriptionHeader>{text}</DescriptionHeader>
        </ContainerHeader>
      )}
    </Container>
  );
}
