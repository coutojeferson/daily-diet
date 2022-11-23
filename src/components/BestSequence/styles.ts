import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Total = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const TotalDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;
