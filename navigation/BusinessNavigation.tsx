import { createStackNavigator } from '@react-navigation/stack';
import WorkoutNavigation from './WorkoutNavigation';
import BottomBarNavigation from './BottomBarNavigation';
import ProgramNavigation from './ProgramNavigation';
import ConnexionNavigation from './ConnexionNavigation';

export default function BusinessNavigation() {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Business" screenOptions={{
        headerShown: false,}}>
          <Stack.Screen name="AppHome" component={BottomBarNavigation} options={{ gestureEnabled: false }}/>
          <Stack.Screen name="Program" component={ProgramNavigation}/>
          <Stack.Screen name="Workout" component={WorkoutNavigation}/> 
          <Stack.Screen name="Connexion" component={ConnexionNavigation} options={{ gestureEnabled: false }}/>
      </Stack.Navigator>
  )
}

