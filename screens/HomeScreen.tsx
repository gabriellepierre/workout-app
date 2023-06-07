import { StyleSheet, FlatList, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import SearchButton from '../components/search/SearchButton';
import Subtitle from '../components/shared/Subtitle';
import WorkoutCarousel from '../components/workout/WorkoutCarousel';
import ProgramCard from '../components/program/ProgramCard';
import { useState } from 'react';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/layouts/Layout';
import PlusButton from '../components/shared/PlusButton';

export default function HomeScreen() {
  const title = "Workout";
  const subtitle = "Suit tes progrès";


  // #region Workouts
  const myWorkouts= "Mes séances";

  //TODO : add workout data in userWorkouts
  const userWorkouts = [];
  const [hasWorkouts, setHasWorkouts] = useState(true); // default to false when linked to db

  const navigation = useNavigation();


  if (userWorkouts.length > 0) {
    setHasWorkouts(true);
  }

  function createWorkout() {
    //@ts-ignore
    navigation.navigate("Workout");
  }

  function goToWorkout() {
    // TODO: navigate to workout recap
  }

  // #endregion Workouts



  // #region Program
  const myProgram= "Reprendre le programme";
  const [hasProgram, setHasProgram] = useState(true); // default to false when linked to db

  const userProgram = [];

  if (userWorkouts.length > 0) {
    setHasProgram(true);
  }


  function goToProgram() {
    // TODO: navigate to program
    // navigation.navigate("Program");
  }

  // #endregion Program

  function toSearchScreen() {
    //@ts-ignore
    navigation.navigate("Research");
  }


  return (
    <Layout>
      <View style={styles.container}>
        <Title title={title} subtitle={subtitle}/>
        {/* #region User's lasts workouts */}
        <View>
          <View style={styles.flexed}>
            <Subtitle text={myWorkouts}/>
            <SearchButton toSearchScreen={toSearchScreen}/>
          </View>
          {hasWorkouts ? (
            <WorkoutCarousel/>)
            : (
              <View style={styles.noWorkoutArea}>
                <Text> Vous n'avez pas encore fait de séance.</Text>
                <PrimaryButton onPress={createWorkout} title='Commencer une séance' style={styles.buttonAdd} />
              </View>
            )
          }
          
        </View>
        {/* #endregion User's lasts workouts */}

        {/* #region User's program */}
        <View>
          <View style={styles.flexed}>
            <Subtitle text={myProgram}/>
            <SearchButton toSearchScreen={toSearchScreen} />
          </View>
          {hasProgram ? (
            <ProgramCard onPress={goToProgram} title='Nom du programme' objective='Perte de poids' workoutName='Haut du corps' />)
            : (
              <View style={styles.noWorkoutArea}>
                <PrimaryButton onPress={toSearchScreen} title='Commencer un programme' style={styles.buttonAdd} />
              </View>
            )
          }
          
        </View>
        {/* #endregion User's program */}

        <View style={styles.centered}>
          <PlusButton onPress={createWorkout}/>
        </View>
      </View>
    </Layout>
  )
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
    },
    centered: {
      marginTop: 10,
      alignItems: "center"
    },
    flexed: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    noWorkoutArea: {
      alignItems: "center",
    },
    buttonAdd: {
      marginTop: 10,
    }
  });
  
  