import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 5px;
`;
export const Form = styled(TextInput)`
  min-height: 56px;
  /* max-height: 56px; */
  flex-direction: row;
  height: 48px;
  border-radius: 6px;
  border-width: 1px;
  padding: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;
