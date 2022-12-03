import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

export type StyleButtonProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StyleButtonProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-width: ${({ type }) => (type === 'PRIMARY' ? 0 : 1)}px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  margin-bottom: 10px;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 20,
  color: type === 'PRIMARY' ? theme.COLORS.GRAY_4 : theme.COLORS.GRAY_1,
}))`
  margin-right: 8px;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;
