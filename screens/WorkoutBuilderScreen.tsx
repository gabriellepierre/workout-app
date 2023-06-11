import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

import { View, FlatList, StyleSheet } from 'react-native';
import PlusButton from '../components/shared/PlusButton';
import SetsCard from '../components/workout/SetsCard';
import { exercises } from '../data/ExercisesData';


const data = [
  { id: 1, title: 'Développé couché', bodyPart: 'Pectoraux' },
  { id: 2, title: 'Soulevé de terre', bodyPart: 'Bas du corps' },
  { id: 3, title: 'Squat', bodyPart: 'Bas du corps' },
  { id: 4, title: 'Hip trust', bodyPart: 'Fessiers' },
  // TODO Ajoutez les autres éléments de votre carrousel
];

export default function WorkoutBuilderScreen() {

    const workoutName = "Séance n° X";

  const navigation = useNavigation();

  function patchWorkout () {
    // TODO: POST workout and register name
    //@ts-ignore
    navigation.navigate("Builder");
  }

    return (
      <Layout>
        <View style={styles.container}>
          <Title title={workoutName} subtitle="Exercices" />
          <View style={styles.list}>
              <FlatList
                data={exercises}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <SetsCard exercise={item} style={true} />
                )}
              />
          </View>
          <View style={[styles.centered]}>
            <PlusButton onPress={() => navigation.goBack()}/>
            <PrimaryButton 
                onPress={patchWorkout} 
                title='Terminer la séance' 
                color="#364d53" 
                textStyle={{color: "white"}}
            />
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
      gap: 10,
    },
    search: {
        marginVertical: 15,
    },
    form: {
      marginVertical: 50,
    }
  });