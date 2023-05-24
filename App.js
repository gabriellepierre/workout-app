import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <View>
        <StatusBar style="auto" />

        {/* <View style={styles.container}>
       
          </View>*/}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
