import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { programs } from '../data/ProgramData';
import ComboBox from '../components/shared/ComboBox';
import { PROGRAM_OBJECTIVE } from '../model/program/Objective';
import { PROGRAM_LEVEL } from '../model/program/Level';

export default function ProgramCreationScreen() {


  const programNumber = programs.length;
  const [programName, setProgramName] = useState("");
  const [programLevel, setProgramLevel] = useState("");
  const [programObjective, setProgramObjective] = useState("");

  const ProgramName = "Programme n°" + programNumber;

  const objectives = PROGRAM_OBJECTIVE;
  const levels = PROGRAM_LEVEL;

  const navigation = useNavigation();

  function postProgram () {
    
    //@ts-ignore
    navigation.navigate("Builder");
  }

    return (
      <Layout>
        <View style={styles.container}>
          <Title title={ProgramName} subtitle="Propriétés du programme"/>
          <View style={styles.form}>
            <Text style={styles.propTitle}>Nommez votre programme</Text>
            <PrimaryInput dark={false} onWrite={setProgramName} placeholderText={ProgramName}/>
          </View>
          <View style={styles.form}>
            <Text style={styles.propTitle}>Niveau</Text>
            <ComboBox onSelect={setProgramLevel} options={levels}/>
          </View>
          <View style={styles.form}>
            <Text style={styles.propTitle}>Objectif du programme</Text>
            <ComboBox onSelect={setProgramObjective} options={objectives}/>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={postProgram} title='Valider' color="#364d53" textStyle={{color: "white"}}/>
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
      alignItems: "center",
      marginTop: 20,
    },
    form: {
      marginTop: 20,
    },
    propTitle: {
      textTransform: "uppercase",
      alignSelf: "center",
      fontSize: 17,
      marginBottom: 15
    }
  });