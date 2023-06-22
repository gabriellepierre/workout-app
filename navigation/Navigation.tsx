import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConnexionNavigation from "./ConnexionNavigation";
import BusinessNavigation from "./BusinessNavigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConnectedUser } from "../redux/actions/actionStorage";

export default function Navigation() {
    const Stack = createStackNavigator();
    const [userAccess, setUserAccess] = useState("Connexion");
    const dispatch = useDispatch();

    // @ts-ignore
    const { user } = useSelector(state => state.appReducer.storage);
    
    useEffect(() => {
        const loadUser = async () => {
            // @ts-ignore
            await getConnectedUser();
        };
        loadUser();
    }, [dispatch]);

    if (user) {
        setUserAccess("Business")
    }
    return (
        <Stack.Navigator 
            initialRouteName={userAccess} 
            screenOptions={{ headerShown: false,}}
        >
            <Stack.Screen name="Connexion" component={ConnexionNavigation}/>
        
            <Stack.Screen name="Business" component={BusinessNavigation}/>
        </Stack.Navigator>
    )
}
