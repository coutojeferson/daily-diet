import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 40px;
`;

export const SubtitleBold = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const UnsuccessImg = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 40px;
`;
