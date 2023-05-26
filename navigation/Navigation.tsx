import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConnexionNavigation from "./ConnexionNavigation";
import BusinessNavigation from "./BusinessNavigation";
import { useState } from "react";

export default function Navigation() {
    const Stack = createStackNavigator();
    const [userAccess, setUserAccess] = useState("Connexion");

    let isConnected = false;
    if (isConnected) {
        setUserAccess("Business")
    }


    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={userAccess} 
                screenOptions={{ headerShown: false,}}
            >
                <Stack.Screen name="Connexion" component={ConnexionNavigation}/>
                <Stack.Screen name="Business" component={BusinessNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
