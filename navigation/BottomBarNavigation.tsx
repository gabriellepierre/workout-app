import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchBar from "../components/search/SearchBar";
import HomeNavigation from "./HomeNavigation";

export default function BottomBarNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    
    const Tab = createBottomTabNavigator();

    return (
        <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen 
                name="Home" 
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="home" color={color}/>,
                }}
            />
            <BottomTabNavigator.Screen 
                name="Plus" 
                component={SearchScreen}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="plus" color={color}/>,
            }}/>
            <BottomTabNavigator.Screen
                name="Account" 
                component={AccountScreen}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="user" color={color}/>,

            }}/>
        </BottomTabNavigator.Navigator>

    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}