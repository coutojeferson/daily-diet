import styled from 'styled-components/native';

export type FeedBackStyleCard = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: FeedBackStyleCard;
};

export const Container = styled.View<Props>(({ theme, type }) => ({
  backgroundColor:
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT,
  maxWidth: '55%',
  padding: 16,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginBottom: 12,
}));

export const Total = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const TotalDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  text-align: center;
`;
