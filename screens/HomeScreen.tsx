import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import SearchButton from '../components/search/SearchButton';
import Subtitle from '../components/shared/Subtitle';
import WorkoutCarousel from '../components/workout/WorkoutCarousel';
import ProgramCard from '../components/program/ProgramCard';
import { useState, useEffect } from 'react';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Layout from '../components/layouts/Layout';
import { getConnectedUser } from '../hooks/asyncStorage/actionStorage';
import { UserType } from '../model/user/UserType';
import { useSelector } from 'react-redux';
import { useCurrentUser } from '../hooks/useCurrentUser';

export default function HomeScreen() {
  const title = "Workout";
  const subtitle = "Suit tes progrès";

  const navigation = useNavigation();
  const user = useCurrentUser();
  const isFocused = useIsFocused();

  useEffect(() => {

    const blockGoBack = () => {
      navigation.addListener('beforeRemove', (e) => {
        // Vérifier si l'écran est en focus
        if (isFocused) {
          // Ignorer la navigation "goBack"
          e.preventDefault();
        }
      });
    };

    // Ajouter l'écouteur pour bloquer le "goBack" lors du montage de l'écran
    blockGoBack();

    // Nettoyer l'écouteur lorsque l'écran est démonté
    return () => {
      navigation.removeListener('beforeRemove', () => {});
    };
  }, [isFocused, navigation]);
  
  // #region Workouts
  const myWorkouts= "Mes séances";

  // @ts-ignore
  const workoutStore = useSelector(state => state.appReducer.workout);
  const workouts = workoutStore.workoutList;

  const userWorkouts = workouts?.filter(e => e.author === user?.email);

  function createWorkout() {
    //@ts-ignore
    navigation.navigate("Workout", user.email);
  }
  // #endregion Workouts

  // #region Program
  const myProgram= "Reprendre le programme";
  // @ts-ignore
  const userStore = useSelector(state => state.appReducer.user);

  const storedUser = userStore.usersList.find(u => u._id = user?._id);
  const userProgramId = storedUser?.program;

  // @ts-ignore
  const programStore = useSelector(state => state.appReducer.program);
  const userProgram = programStore.allPrograms.find(program => program._id === userProgramId);


  function goToProgram() {
    //@ts-ignore
    navigation.navigate('ProgramRecap', userProgramId);
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
          </View>
          {userWorkouts?.length !== 0 ? (
            <WorkoutCarousel carouselData={userWorkouts} />)
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
            {/* NOTATION : Navigation , at least one button */}
            <SearchButton toSearchScreen={toSearchScreen} />
          </View>
          {userProgram ? (
            <ProgramCard onPress={goToProgram} program={userProgram} />)
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
  
  