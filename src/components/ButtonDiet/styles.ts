import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonStyle = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

export type StyleProps = {
  isActive?: boolean;
  type: ButtonStyle;
};

export const Container = styled(TouchableOpacity)<StyleProps>`
  flex: 1;
  width: 56%;
  justify-content: center;
  flex-direction: row;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  margin-right: 8px;
  align-items: center;

  ${({ theme, isActive, type }) =>
    isActive && type === 'PRIMARY'
      ? css`
          border: 1px solid ${theme.COLORS.GREEN_DARK};
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : isActive &&
        type === 'SECONDARY' &&
        css`
          border: 1px solid ${theme.COLORS.RED_DARK};
          background-color: ${theme.COLORS.RED_LIGHT};
        `}
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
`;
export const StatusButton = styled.View<StyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 7px;
  margin-right: 8px;

  ${({ theme, type }) =>
    type === 'PRIMARY'
      ? css`
          background-color: ${theme.COLORS.GREEN_DARK};
        `
      : type === 'SECONDARY' &&
        css`
          background-color: ${theme.COLORS.RED_DARK};
        `}
`;
