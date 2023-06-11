import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { programs } from '../data/ProgramData';
import { users } from '../data/UserData';

export default function ProgramRecapScreen() {

  const navigation = useNavigation();
  // TODO remplacer program par le vrai programme
  const program = programs.filter(program => program._id=== "187651" && program)[0];

  // TODO remplacer users par les vrais users
  const numberOfUsers = users.filter(user => user.program === program._id).length;

  function chooseProgram() {
    // Get the user, and add the program to it
    //@ts-ignore
    navigation.navigate("HomeScreen");
  }
    return (
      <Layout>
        <View style={styles.container}>
          <Title title={program.name} subtitle={program.objective} />
          {/* <View style={[styles.centered]}>
            <Ionicons name="barbell-outline" size={50} color="black" />
          </View> */}
          <View>
              <Text style={styles.params}>Suivi par {numberOfUsers} <Ionicons name="person" size={20} color="black" /></Text>
            <Text style={styles.params}>Nombre de séances : {program.seances.length}</Text>
            <Text style={styles.params}>Niveau : {program.level}</Text>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={chooseProgram} title='Choisir ce programme' />
          </View>
        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    centered: {
      alignItems: "center",
      marginTop: 20
    },
    params: {
      textTransform: "uppercase",
      fontSize: 17,
      marginTop: 15,
    },
    flexed: {
      flexDirection: "row",
      alignItems: "center",

    }
  });