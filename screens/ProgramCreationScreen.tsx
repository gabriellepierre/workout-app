import { StyleSheet, View, Text } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export default function ProgramCreationScreen() {

    const ProgramName = "Programme n° X";

  const navigation = useNavigation();

  function ProgramNaming() {
    // TODO: register email
  }

  function handleProgramTitle () {
    // TODO: POST Program and register name
    //@ts-ignore
    navigation.navigate("Exercices");
  }

    return (
      <Layout>
        <View style={styles.container}>
          <Title title='Program' subtitle="Propriétés du programme"/>
          <View style={styles.form}>
            <Text>Nommez votre programme</Text>
            <PrimaryInput dark={false} onWrite={ProgramNaming} placeholderText={ProgramName}/>
          </View>
          <View style={styles.form}>
          <Text>Niveau</Text>
            <PrimaryInput dark={false} onWrite={ProgramNaming} placeholderText={ProgramName}/>
          </View>
          <View style={styles.form}>
          <Text>Objectif du programme</Text>

            <PrimaryInput dark={false} onWrite={ProgramNaming} placeholderText={ProgramName}/>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={handleProgramTitle} title='Valider' color="#364d53" textStyle={{color: "white"}}/>
          </View>
        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "white",
    },
    centered: {
      alignItems: "center"
    },
    form: {
      marginVertical: 50,
    },
  });