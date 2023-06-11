import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';
import { WorkoutType } from '../../model/workout/WorkoutType';

 const WorkoutCarousel = (
  {carouselData}: {carouselData: WorkoutType[]}
  ) => {
    function goToWorkout() {
        // TODO: navigate to workout recap
      }
      
    return (
      <View>
        <FlatList
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.item}>
                <WorkoutCard onPress={goToWorkout} date={item.createdAt} title={item.name} />
              {/* TODO Affichez le contenu de chaque élément ici */}
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
  
  