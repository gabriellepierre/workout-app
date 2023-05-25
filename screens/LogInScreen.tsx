import { StyleSheet, Text, View } from 'react-native';

export default function LogInScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Workout</Text>
        </View>

      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "white",
      width: '100%',
      backgroundColor: "#2d343a",
    },
    centered: {
      marginLeft:10
      // alignItems: "center"
    },
    title: {
      marginTop: 50,
      fontSize: 70,
      fontWeight: "bold",
      color: "white",
    }
  });