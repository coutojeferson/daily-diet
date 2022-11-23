import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: IconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>(({ theme, type }) => ({
  backgroundColor:
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT,
  width: '100%',
  justifyContent: 'center',
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 40,
}));

export const ContainerIcon = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 6px;
  padding-top: 6px;
`;

export const ContainerPersent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const Persent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD + theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DescriptionPersent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const HeaderIcon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  backgroundColor: '#222',
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
