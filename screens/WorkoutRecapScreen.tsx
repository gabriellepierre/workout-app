import {useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ExerciseCard from '../components/workout/ExerciseCard';


export default function WorkoutRecapScreen() {
  const navigation = useNavigation();
  // @ts-ignore
  const workoutStore = useSelector(state => state.appReducer.workout);

  // @ts-ignore
  const route = useRoute<RouteProp<RootStackParamList, 'WorkoutRecap'>>();
  const workoutId = route.params;

  const workoutDetail = workoutStore.workoutList.find(w => w._id === workoutId);

  return (
    <Layout>
      <View style={styles.container}>
        <Title title={workoutDetail?.name} subtitle={workoutDetail?.author ? workoutDetail.author : ""} />
        <View>
          {/* NOTATION : Display list of items */}
          <FlatList
            data={workoutDetail?.exercises}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <ExerciseCard exercise={item} style={true} />
            )}
          />
        </View>
        <View style={styles.centered}>
          <PrimaryButton onPress={() => {navigation.goBack()}} title='Retour' />
        </View>
      </View>
    </Layout>
  )
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: "center",
    marginTop: 20
  },
  params: {
    textTransform: "uppercase",
    fontSize: 17,
    marginTop: 15,
  },
  flexed: {
    flexDirection: "row",
    alignItems: "center",

  }
});