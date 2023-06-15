import { createStackNavigator } from '@react-navigation/stack';
import ProgramCreationScreen from '../screens/ProgramCreationScreen';
import ProgramWorkoutsScreen from '../screens/PogramWorkoutsScreen';
import WorkoutNavigation from './WorkoutNavigation';

export default function ProgramNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="ProgramCreation" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="ProgramCreation" component={ProgramCreationScreen}/>
        <Stack.Screen name="Builder" component={ProgramWorkoutsScreen}/>
        <Stack.Screen name="Workout" component={WorkoutNavigation}/>
      </Stack.Navigator>
  )
}

