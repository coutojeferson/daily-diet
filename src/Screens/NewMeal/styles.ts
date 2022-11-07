import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const ContainerHeader = styled.View`
  flex: 1;
  padding: 24px;
`;
export const ContainerBody = styled.View`
  flex: 7;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 24px;
  /* align-items: center; */
`;

export const ContainerDateTime = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
