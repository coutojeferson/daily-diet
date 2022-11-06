import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DashBoard } from './src/Screens/DashBoard';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import theme from './src/theme';
import { Statistic } from './src/Screens/Statistic';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Statistic type="PRIMARY" /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
