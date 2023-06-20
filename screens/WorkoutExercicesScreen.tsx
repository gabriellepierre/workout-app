import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/search/SearchBar';
import ExerciseCard from '../components/workout/ExerciseCard';
import { useState } from 'react';

import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';
import {getAllExercises} from "../redux/actions/actionExercises";
import {useEffect} from 'react';

export default function WorkoutExercicesScreen() {

  const workoutName = "Séance n° X";

  const navigation = useNavigation();

  // @ts-ignore
  const exerciseList = useSelector(state => state.appReducer.exercise);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadExercise = async () => {
    // @ts-ignore
      await dispatch(getAllExercises());
    };
    loadExercise();

  }, [dispatch]);

  function handleWorkoutExercises () {
    // TODO: POST workout and register name
    //@ts-ignore
    navigation.navigate("Builder");
  }
  function handleExerciseSearch() {}

  // #region Checkboxes
  const [checkedItems, setCheckedItems] = useState([]);

  const isChecked = (id) => {
    return checkedItems.includes(id);
  };

  const toggleItem = (id) => {
    if (isChecked(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  // #endregion Checkboxes

  
    return (
      <Layout>
        <View style={styles.container}>
          <Title title={workoutName} subtitle="Choisir des exercices"/>
          <View style={styles.search}>
            <SearchBar onSearch={handleExerciseSearch} />
          </View>
          <View style={styles.list}>
              <FlatList
                data={exerciseList.exerciseList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => toggleItem(item._id)}>
                      <ExerciseCard exercise={item} checkbox={
                        <Checkbox status={isChecked(item._id) ? "checked" : "unchecked"} color='white' />
                      }
                      style={isChecked(item._id)}
                      />
                  </TouchableOpacity>
                )}
              />
          </View>
          <View style={[styles.centered]}>
            <PrimaryButton onPress={handleWorkoutExercises} title='Ajouter à la séance' color="#364d53" textStyle={{color: "white"}}/>
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
    list:{
      height: "40%",
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
  });