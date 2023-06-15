import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";
import { Ionicons } from '@expo/vector-icons';
import HomeNavigation from "./HomeNavigation";
import WorkoutNavigation from "./WorkoutNavigation";
import PlusButton from "../components/shared/PlusButton";

export default function BottomBarNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen 
                name="Home" 
                component={HomeNavigation}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: 
                        ({color}) => <TabBarIcon 
                    name="home" color={color}/>,
                    tabBarActiveTintColor: "#364d53",
                    tabBarItemStyle: {borderColor: "#364d53",}
                }}
            />
            <BottomTabNavigator.Screen 
                name="Plus" 
                component={WorkoutNavigation}
                options={{
                    title: 'Workout',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarButton: () => (<PlusButton style={{
                        top: -20,
                    }} />),
                    // tabBarVisible=false,

            }}/>
            <BottomTabNavigator.Screen
                name="Account" 
                component={AccountScreen}
                options={{
                    title: 'Account',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({color}) => 
                        <Ionicons name="person" color={color} size={30}/>,
                    tabBarActiveTintColor: "#364d53",

            }}/>
        </BottomTabNavigator.Navigator>

    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={35} {...props} />;
}