import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { addWorkout } from '../redux/actions/actionWorkout';
import { useDispatch } from 'react-redux';
import { useCurrentUser } from '../hooks/useCurrentUser';

export default function WorkoutCreationScreen() {

    const defaultName = "Séance n° X";

  const navigation = useNavigation();
  const [workoutName, setWorkoutName] = useState();

  const user = useCurrentUser();

  const dispatch = useDispatch();

  function workoutNaming() {
    // TODO: register email
  }

  function handleWorkoutTitle () {
    // TODO: POST workout and register name
    // @ts-ignore
    dispatch(addWorkout());
    //@ts-ignore
    navigation.navigate("Exercices", );
  }

    return (
      <Layout>
        <View style={styles.container}>
          <Title title='Workout' subtitle="Nommez votre séance"/>
          <View style={styles.form}>
            <PrimaryInput dark={false} onWrite={workoutNaming} placeholderText={defaultName}/>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={handleWorkoutTitle} title='Valider' color="#364d53" textStyle={{color: "white"}}/>
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