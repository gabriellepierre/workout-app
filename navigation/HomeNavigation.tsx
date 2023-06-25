import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WorkoutNavigation from './WorkoutNavigation';
import ProgramRecapScreen from '../screens/ProgramRecapScreen';
import ProgramNavigation from './ProgramNavigation';
import WorkoutRecapScreen from '../screens/WorkoutRecapScreen';

export default function HomeNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Research" component={SearchScreen}/>
        <Stack.Screen name="ProgramRecap" component={ProgramRecapScreen}/>
        <Stack.Screen name="Program" component={ProgramNavigation}/>
        <Stack.Screen name="Workout" component={WorkoutNavigation}/>
        <Stack.Screen name="WorkoutRecap" component={WorkoutRecapScreen}/>
      </Stack.Navigator>
  )
}

