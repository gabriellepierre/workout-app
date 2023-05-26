import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Layout from "./components/layouts/Layout";

export default function App() {
  return (
    <Layout>
      <View>
        <StatusBar style="auto" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
