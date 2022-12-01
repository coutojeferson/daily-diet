import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Success } from '../Screens/Success';
import { DashBoard } from '../Screens/DashBoard';
import { NewMeal } from '../Screens/NewMeal';
import { Statistic } from '../Screens/Statistic';
import { Unsuccess } from '../Screens/Unsuccess';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="dashboard" component={DashBoard} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="success" component={Success} />
      <Screen name="unsuccess" component={Unsuccess} />
    </Navigator>
  );
}
