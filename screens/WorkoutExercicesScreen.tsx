import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/search/SearchBar';
import ExerciseCard from '../components/workout/ExerciseCard';
import { useState } from 'react';

import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Card, Checkbox, Paragraph } from 'react-native-paper';


const data = [
  { id: 1, title: 'Développé couché', bodyPart: 'pectoraux' },
  { id: 2, title: 'Soulevé de terre', bodyPart: 'Bas du corps' },
  { id: 3, title: 'Squat', bodyPart: 'Bas du corps' },
  { id: 4, title: 'Hip trust', bodyPart: 'Fessiers' },
  { id: 5, title: 'Développé couché', bodyPart: 'pectoraux' },
  { id: 6, title: 'Soulevé de terre', bodyPart: 'Bas du corps' },
  { id: 7, title: 'Squat', bodyPart: 'Bas du corps' },
  { id: 8, title: 'Hip trust', bodyPart: 'Fessiers' },
  { id: 9, title: 'Développé couché', bodyPart: 'pectoraux' },
  { id: 10, title: 'Soulevé de terre', bodyPart: 'Bas du corps' },
  { id: 11, title: 'Squat', bodyPart: 'Bas du corps' },
  { id: 12, title: 'Hip trust', bodyPart: 'Fessiers' },
  // TODO Ajoutez les autres éléments de votre carrousel
];

export default function WorkoutExercicesScreen() {

    const workoutName = "Séance n° X";

  const navigation = useNavigation();

  function workoutNaming() {
    // TODO: register email
  }

  function handleWorkoutTitle () {
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
          <Title title='Workout' subtitle="Choisir des exercices"/>
          <View style={styles.search}>
            <SearchBar onSearch={handleExerciseSearch} />
          </View>
          <View style={styles.list}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => toggleItem(item.id)}>
                      <ExerciseCard bodyPart={item.bodyPart} title={item.title} onPress={() => toggleItem(item.id)} checkbox={
                        <Checkbox status={isChecked(item.id) ? "checked" : "unchecked"} color='white' />
                      }
                      style={isChecked(item.id)}
                      />
                  </TouchableOpacity>
                )}
              />
          </View>
          <View style={[styles.centered]}>
            <PrimaryButton onPress={handleWorkoutTitle} title='Ajouter à la séance' color="#364d53" textStyle={{color: "white"}}/>
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
  });