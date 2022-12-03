import { TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Title, Icon, StyleButtonProps } from './styles';
type Props = TouchableOpacityProps & {
  icon?: keyof typeof Feather.glyphMap;
  title: string;
  width?: boolean;
  type?: StyleButtonProps;
};

export function Button({
  type = 'PRIMARY',
  icon,
  title,
  width = true,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest} style={width && { width: '100%' }}>
      <Icon name={icon} type={type} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}
