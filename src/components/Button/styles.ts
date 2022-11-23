import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 32px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_4,
}))`
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
