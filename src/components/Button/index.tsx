import { TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Icon } from './styles';
type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>Nova refeição</Title>
    </Container>
  );
}
