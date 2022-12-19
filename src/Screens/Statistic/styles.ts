import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export type FeedBackStyleCard = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: FeedBackStyleCard;
};

export const Container = styled(SafeAreaView)<Props>(({ theme, type }) => ({
  backgroundColor:
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT,
  flex: 1,
}));

export const ContainerHeader = styled.View`
  padding: 24px;
`;
export const ContainerHeaderInfo = styled.View`
  align-items: center;
`;
export const ContainerBody = styled.View`
  flex: 5;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 24px;
  align-items: center;
`;

export const ContainerCardFeedback = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  /* flex-wrap: wrap; */
`;

export const Persent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD + theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DescriptionPersent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 10px;
  margin-bottom: 23px;
`;
