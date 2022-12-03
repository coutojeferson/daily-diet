import styled from 'styled-components/native';
export type StatusStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StatusStyleProps;
};

export const Container = styled.View`
  width: 144px;
  height: 34px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const Status = styled.View.attrs<Props>(({ theme, type }) => ({
  backgroundColor:
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  marginRight: 8,
}))`
  width: 8px;
  height: 8px;
  border-radius: 7px;
`;
