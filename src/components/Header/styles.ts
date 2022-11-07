import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type backIconStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

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

export const ContainerHeader = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
export const DescriptionHeader = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const Icon = styled(MaterialIcons).attrs<Props>(({ type, theme }) => ({
  size: 24,
  color:
    type === 'TERTIARY'
      ? theme.COLORS.GRAY_2
      : type === 'PRIMARY'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK,
}))`
  margin-right: 85px;
`;
