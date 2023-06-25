import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View, FlatList, StyleSheet } from 'react-native';
import PlusButton from '../components/shared/PlusButton';
import SetsCard from '../components/workout/SetsCard';

export default function WorkoutBuilderScreen() {
  const navigation = useNavigation();

  // @ts-ignore
  const route = useRoute<RouteProp<RootStackParamList, 'Builder'>>();
  const workoutName = route.params.workoutName;
  const exercises = route.params.exercises;


  function patchWorkout () {
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
                showsVerticalScrollIndicator={false}
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