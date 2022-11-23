import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashBoard } from '../Screens/DashBoard';
import { NewMeal } from '../Screens/NewMeal';
import { Statistic } from '../Screens/Statistic';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="dashboard" component={DashBoard} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="statistic" component={Statistic} />
    </Navigator>
  );
}
