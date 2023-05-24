import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";
import PlusButton from "../components/PlusButton";
import SearchScreen from "../screens/SearchScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title: '',
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
                    // title: 'Account',
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon 
                    name="user" color={color}/>,

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