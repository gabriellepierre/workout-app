import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

export default function HomeScreen() {
  const title = "Workout";
  const subtitle = "Sous-titre super bien";
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
        </View>
        <Title title={title} subtitle={subtitle}/>
        <Text>Mon accueil</Text>

      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
    },
    centered: {
      // alignItems: "center"
    },
    title: {
      marginTop: 50,
      fontSize: 70,
      fontWeight: "bold",
    }
  });
  
  