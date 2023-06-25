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

export default function ProgramWorkoutsScreen() {

  const programNumber = programs.length;

  const ProgramName = "Programme n°" + programNumber;

  const objectives = PROGRAM_OBJECTIVE;
  const levels = PROGRAM_LEVEL;

  const navigation = useNavigation();

  function ProgramNaming() {
  }

  function postProgram () {
    //@ts-ignore
    navigation.navigate("Exercices");
  }

    return (
      <Layout>
        <View style={styles.container}>
          <Title title={ProgramName} subtitle="Propriétés du programme"/>

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