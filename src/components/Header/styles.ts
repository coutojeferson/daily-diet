import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type backIconStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: backIconStyleProps;
};

export const Container = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Perfil = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ type, theme }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
