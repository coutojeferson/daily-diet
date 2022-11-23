import { TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Icon } from './styles';
type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
};

export function Button({ icon, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
