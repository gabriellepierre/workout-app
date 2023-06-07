import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBarNavigation from "./navigation/BottomBarNavigation";
import ConnexionNavigation from "./navigation/ConnexionNavigation";
import BusinessNavigation from "./navigation/BusinessNavigation";
import WorkoutNavigation from "./navigation/WorkoutNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigation /> */}
      <NavigationContainer>
        <ConnexionNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
