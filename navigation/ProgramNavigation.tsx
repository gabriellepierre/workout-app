import { createStackNavigator } from '@react-navigation/stack';

export default function ProgramNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Program" screenOptions={{
        headerShown: false,}}>
        {/* <Stack.Screen name="Naming" component={ProgramCreationScreen}/> */}
        {/* <Stack.Screen name="Builder" component={ProgramBuilderScreen}/> */}
        {/* <Stack.Screen name="Workout" component={WorkoutNavigation}/> */}
      </Stack.Navigator>
  )
}

