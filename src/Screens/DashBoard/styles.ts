import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const MealSection = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`;
