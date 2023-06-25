import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { getConnectedUser } from "./hooks/asyncStorage/actionStorage";

export default function App() {
  const [userAccess, setUserAccess] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getConnectedUser();
      if ((await user) !== null) {
        setUserAccess(true);
      } else {
        setUserAccess(false);
      }
    };
    loadUser();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigation userAccess={userAccess} />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
