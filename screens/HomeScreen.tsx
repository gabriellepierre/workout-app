import { StyleSheet, FlatList, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import SearchButton from '../components/search/SearchButton';
import Subtitle from '../components/shared/Subtitle';
import WorkoutCarousel from '../components/workout/WorkoutCarousel';
import ProgramCard from '../components/program/ProgramCard';
import { useState } from 'react';
import PrimaryButton from '../components/shared/PrimaryButton';
import PrimaryInput from '../components/shared/PrimaryInput';
import { useNavigation } from '@react-navigation/native';
import HomeNavigation from '../navigation/HomeNavigation';

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
    // TODO: navigate to workout creation
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

  function addProgram() {
    // TODO: navigate to programs list
    // navigation.navigate("Workout");

  }
  // #endregion Program

  function toSearchScreen() {
    navigation.navigate("Research");
  }


  return (
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
              <PrimaryButton onPress={addProgram} title='Commencer un programme' style={styles.buttonAdd} />
            </View>
          )
        }
        
      </View>
      {/* #endregion User's program */}

      {/* <PrimaryInput onSearch={goToProgram} dark={false} placeholderText={"EMAIL / PSEUDO"}/> */}

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
  
  