import { StyleSheet, FlatList, View } from 'react-native';
import Title from '../components/shared/Title';
import SearchButton from '../components/search/SearchButton';
import Subtitle from '../components/shared/Subtitle';
import WorkoutCard from '../components/workout/WorkoutCard';
import WorkoutCarousel from '../components/workout/WorkoutCarousel';
import ProgramCard from '../components/program/ProgramCard';

export default function HomeScreen() {
  const title = "Workout";
  const subtitle = "Suit tes progrès";

  const myWorkouts= "Mes séances";
  const myProgram= "Reprendre le programme";

  function goToWorkout() {
    // TODO: navigate to workout recap
  }

  function goToProgram() {
    // TODO: navigate to program
  }


  return (
    <View style={styles.container}>
      <Title title={title} subtitle={subtitle}/>

      {/* #region User's lasts workouts */}
      <View>
        <View style={styles.flexed}>
          <Subtitle text={myWorkouts}/>
          <SearchButton />
        </View>
        {/* <View style={styles.carousel}>
          <WorkoutCard onPress={goToWorkout} date='12 mai' title='Nom de la séance' />
          <WorkoutCard onPress={goToWorkout} date='12 mai' title='Nom de la séance' />
          <WorkoutCard onPress={goToWorkout} date='12 mai' title='Nom de la séance' />
          <WorkoutCard onPress={goToWorkout} date='12 mai' title='Nom de la séance' />
        </View> */}
        <WorkoutCarousel/>
      </View>
      {/* #endregion User's lasts workouts */}

      {/* #region User's program */}
      <View>
        <View style={styles.flexed}>
          <Subtitle text={myProgram}/>
          <SearchButton />
        </View>
        <ProgramCard onPress={goToProgram} title='Nom du programme' objective='Perte de poids' workoutName='Haut du corps' />
      </View>
      {/* #endregion User's program */}

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
      alignContent: "center",
    }
  });
  
  