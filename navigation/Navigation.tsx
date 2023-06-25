import { createStackNavigator } from "@react-navigation/stack";
import ConnexionNavigation from "./ConnexionNavigation";
import BusinessNavigation from "./BusinessNavigation";

export default function Navigation({userAccess}: {userAccess: boolean}) {
    const Stack = createStackNavigator();

    return(
        !userAccess ? (
            <Stack.Navigator 
                initialRouteName={"Connexion"} 
                screenOptions={{ headerShown: false,}}
            >
                <Stack.Screen name="Connexion" component={ConnexionNavigation}/>
            </Stack.Navigator>
          ) : (
            <Stack.Navigator 
                initialRouteName={"Business"} 
                screenOptions={{ headerShown: false,}}
            >

                <Stack.Screen name="Business" component={BusinessNavigation}/>
            </Stack.Navigator>
          )
    )

}
