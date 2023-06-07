import { createStackNavigator } from '@react-navigation/stack';
import WorkoutNavigation from './WorkoutNavigation';
import HomeNavigation from './HomeNavigation';

export default function BusinessNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Business" screenOptions={{
        headerShown: false,}}>
          <Stack.Screen name="Home" component={HomeNavigation}/>
        {/* <Stack.Screen name="Naming" component={ProgramCreationScreen}/> */}
        {/* <Stack.Screen name="Builder" component={ProgramBuilderScreen}/> */}
        <Stack.Screen name="Workout" component={WorkoutNavigation}/>
      </Stack.Navigator>
  )
}

