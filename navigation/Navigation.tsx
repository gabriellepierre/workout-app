import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    // title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="home" color="darksalmon"/>,
                }}/>
            <BottomTabNavigator.Screen 
                name="Plus" 
                component={AccountScreen}
                options={{
                    headerShown: false,
                    title: 'Plus',
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="plus" color={"darksalmon"}/>,
            }}/>
            <BottomTabNavigator.Screen
                name="Account" 
                component={AccountScreen}
                options={{
                    headerShown: false,
                    title: 'Account',
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="user" color={"darksalmon"}/>,
                }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}