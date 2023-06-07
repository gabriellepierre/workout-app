import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WorkoutNavigation from './WorkoutNavigation';

export default function HomeNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Research" component={SearchScreen}/>
        {/* <Stack.Screen name="Program" component={ProgramScreen}/> */}
        <Stack.Screen name="Workout" component={WorkoutNavigation}/>
      </Stack.Navigator>
  )
}

