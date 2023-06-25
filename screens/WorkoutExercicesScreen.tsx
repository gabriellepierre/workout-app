import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import SearchBar from '../components/search/SearchBar';
import ExerciseCard from '../components/workout/ExerciseCard';
import { useState } from 'react';

import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';
import {getAllExercises} from "../redux/actions/actionExercises";
import {useEffect} from 'react';
import { getWorkout, removeWorkout } from '../hooks/asyncStorage/actionStorage';
import { addWorkout } from '../redux/actions/actionWorkout';
import { useCurrentWorkout } from '../hooks/useCurrentWorkout';
import { WorkoutType } from '../model/workout/WorkoutType';
import { useSearch } from '../hooks/useSearch';

export default function WorkoutExercicesScreen() {

  const workoutStorage = useCurrentWorkout();
  const navigation = useNavigation();
  const [isError, setIsError] = useState(false);
  const [workout, setWorkout] = useState<WorkoutType>(null);

  // NOTATION : Read data from redux store
  // @ts-ignore
  const exercisesStore = useSelector(state => state.appReducer.exercise);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const exercises = useSearch(search, exercisesStore?.exerciseList);

  useEffect(() => {
    const loadExercise = async () => {
    // @ts-ignore
      await dispatch(getAllExercises());
    };
    loadExercise();

  }, [dispatch]);

  function handleWorkoutExercises () {
  // NOTATION : Update data to redux store using redux-thunk (AsyncStorage)
    setWorkout({...workoutStorage, exercises: checkedItems});
    if(workout?.exercises?.length > 0) {
      // Update store data
      // @ts-ignore
      dispatch(addWorkout(workout));
      console.log(workout);


      const removeWorkoutFromStorage = async () => {
        await removeWorkout();
      };
      removeWorkoutFromStorage();
  
      // Retourner à la page d'accueil
      navigation.goBack();
      navigation.goBack();
    } else {
      setIsError(true);
    }

   
  }
  
  // #region Checkboxes
  const [checkedItems, setCheckedItems] = useState([]);

  const isChecked = (item) => {
    return checkedItems.includes(item);
  };

  const toggleItem = (item) => {
    if (isChecked(item)) {
      setCheckedItems(checkedItems.filter(exo => exo !== item));
      
      
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  // #endregion Checkboxes

  
    return (
      <Layout>
        <View style={styles.container}>
          <Title title={workoutStorage?.name} subtitle="Choisir des exercices"/>
          <View style={styles.search}>
            <SearchBar onSearch={setSearch} />
          </View>
          <View style={styles.list}>
              <FlatList
                data={exercises}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => toggleItem(item)}>
                      <ExerciseCard exercise={item} checkbox={
                        <Checkbox status={isChecked(item) ? "checked" : "unchecked"} color='white' />
                      }
                      style={isChecked(item)}
                      />
                  </TouchableOpacity>
                )}
              />
          </View>
          
          <View style={[styles.centered]}>
            <PrimaryButton onPress={handleWorkoutExercises} title='Ajouter à la séance' color="#364d53" textStyle={{color: "white"}}/>
          </View>
          {isError &&
              <View style={styles.error}>
                <Text style={{color: "#de7a6f", fontSize: 16, fontWeight:'500'}}>Veuillez sélectionner au moins un exercice.</Text>
              </View>
            }
        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "white",
    },
    list:{
      height: "50%",
    },
    centered: {
      alignItems: "center",
      marginVertical: 20
    },
    search: {
        marginVertical: 15,
    },
    form: {
      marginVertical: 50,
    },
    error:{
      justifyContent: "flex-end",
      width: "120%",
      color: "white",
      padding: 15,
      alignItems: "center",
      margin: -20
    },
  });