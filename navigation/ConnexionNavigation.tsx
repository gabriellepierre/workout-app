import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from '../screens/LogInScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeNavigation from './HomeNavigation';

export default function ConnexionNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Connexion" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="LogIn" component={LogInScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="Home" component={HomeNavigation}/>
      </Stack.Navigator>
  )
}

