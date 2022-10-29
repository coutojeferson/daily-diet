import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: IconTypeStyleProps;
};

export const Container = styled.TouchableOpacity.attrs<Props>(
  ({ theme, type }) => ({
    backgroundColor:
      type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)`
  width: 327px;
  height: 102px;
  justify-content: center;
  border-radius: 8px;
  padding: 13px;
`;

export const ContainerHeaderIcon = styled.View<Props>`
  align-items: flex-end;
  justify-content: center;
`;
export const ContainerDescription = styled.View<Props>`
  align-items: center;
  justify-content: center;
`;

export const NumberPersent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD + theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DescriptionCard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const HeaderIcon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
