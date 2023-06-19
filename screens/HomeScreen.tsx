import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import SearchButton from '../components/search/SearchButton';
import Subtitle from '../components/shared/Subtitle';
import WorkoutCarousel from '../components/workout/WorkoutCarousel';
import ProgramCard from '../components/program/ProgramCard';
import { useState } from 'react';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/layouts/Layout';
import { workouts } from '../data/WorkoutData';

export default function HomeScreen() {
  const title = "Workout";
  const subtitle = "Suit tes progrès";

  const navigation = useNavigation();

  // TODO : const user ; avec le user logué


  // #region Workouts
  const myWorkouts= "Mes séances";

  //TODO : add workout data in userWorkouts
  // const userWorkouts = workouts?.filter(e => e.author === user.email);
  const [hasWorkouts, setHasWorkouts] = useState(false);

  const userWorkouts = [];

  if (userWorkouts.length > 0) {
    setHasWorkouts(true);
  }

  function createWorkout() {
    //@ts-ignore
    navigation.navigate("Workout");
    // navigation.navigate("Program");
  }

  function goToWorkout() {
    // TODO: navigate to workout recap
  }

  // #endregion Workouts



  // #region Program
  const myProgram= "Reprendre le programme";
  const [hasProgram, setHasProgram] = useState(true); // default to false when linked to db
  // const userProgram = user.program;
  const userProgram = "187651";

  // if (userProgram !== null) {
  //   setHasProgram(true);  
  // }

  function goToProgram() {
    //@ts-ignore
    navigation.navigate('ProgramRecap', userProgram);

    // TODO: navigate to program
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
            <WorkoutCarousel carouselData={workouts.filter(e => e.author === "gabrielle.pierre19@gmail.com")} />)
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
  
  