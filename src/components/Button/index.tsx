import { TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Icon } from './styles';
type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  width?: boolean;
};

export function Button({ icon, title, width = true, ...rest }: Props) {
  return (
    <Container {...rest} style={width && { width: '100%' }}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
