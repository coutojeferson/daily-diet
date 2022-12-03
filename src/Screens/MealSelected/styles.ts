import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HeaderStylesProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type?: HeaderStylesProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'SECONDARY'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
`;

export const ContainerHeader = styled.View`
  flex: 1;
  padding: 24px;
`;
export const Content = styled.View`
  flex: 7;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
`;

export const TitleDateHour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  /* height: 100%; */
  /* background-color: #222; */
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerDateTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
