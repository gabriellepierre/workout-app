import { createStackNavigator } from '@react-navigation/stack';
import WorkoutCreationScreen from '../screens/WorkoutCreationScreen';
import WorkoutExercicesScreen from '../screens/WorkoutExercicesScreen';
import WorkoutBuilderScreen from '../screens/WorkoutBuilderScreen';

export default function WorkoutNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Workout" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="Naming" component={WorkoutCreationScreen} />
        <Stack.Screen name="Exercices" component={WorkoutExercicesScreen} />
        <Stack.Screen name="Builder" component={WorkoutBuilderScreen} />
      </Stack.Navigator>
  )
}

