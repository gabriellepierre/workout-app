import {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { WorkoutType } from '../model/workout/WorkoutType';
import { storeWorkout } from '../hooks/asyncStorage/actionStorage';

export default function WorkoutCreationScreen() {

  const defaultName = "Séance n° X";
  const [isError, setIsError] = useState(false);

  const navigation = useNavigation();
  const user = useCurrentUser();

  const [workoutState, setWorkoutState] = useState<WorkoutType>({name: ''});

  function setWorkoutName(e) {
    setWorkoutState({...workoutState, name: e, author: user?.email});
  }

  function handleWorkoutTitle () {

    if(workoutState.name !== '') {
      const storeWorkoutToCreate = async () => {
        await storeWorkout(workoutState);
      };
      storeWorkoutToCreate();

      //@ts-ignore
      navigation.navigate("Exercices");

    } else {
      setIsError(true);
    }

  }
    return (
      <Layout>
        <View style={styles.container}>
          <Title title='Workout' subtitle="Nommez votre séance"/>
          <View style={styles.form}>
            <PrimaryInput dark={false} onWrite={setWorkoutName} placeholderText={defaultName}/>
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