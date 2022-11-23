import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
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
export const Form = styled.View``;

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
