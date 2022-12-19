import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StatusTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StatusTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  margin-bottom: 8px;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const MealsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-right: 12px;
`;

export const Divider = styled.View`
  height: 14px;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_4}; */
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
  margin-right: 12px;
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  flex: 1;
`;

export const Status = styled.View<Props>(({ theme, type }) => ({
  backgroundColor:
    type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  width: 14,
  heigth: 14,
  borderRadius: 7,
}));
