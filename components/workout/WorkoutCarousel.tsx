import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';
import { WorkoutType } from '../../model/workout/WorkoutType';
import { useNavigation } from '@react-navigation/native';

const WorkoutCarousel = (
  {carouselData}: {carouselData: WorkoutType[]}
  ) => {
    const navigation = useNavigation();

    function goToWorkout(id: string) {
      //@ts-ignore
      navigation.navigate('WorkoutRecap', id);
    }
      
    return (
      <View>
        {/* NOTATION : Display list of items */}
        <FlatList
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.item}>
                <WorkoutCard onPress={goToWorkout} date={item.createdAt} title={item.name} id={item._id} />
            </View>
          )}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    item: {
      width: 175, // Ajustez la largeur selon vos besoins
      marginRight: 10, // Ajoutez un espacement entre les éléments
    },
  });

  export default WorkoutCarousel;
  
  