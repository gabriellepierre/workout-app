import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';

const carouselData = [
    { id: 1, title: 'Élément 1' },
    { id: 2, title: 'Élément 2' },
    { id: 3, title: 'Élément 3' },
    // TODO Ajoutez les autres éléments de votre carrousel
  ];
  
 const WorkoutCarousel: React.FC = () => {

    function goToWorkout() {
        // TODO: navigate to workout recap
      }
      
    return (
      <View>
        <FlatList
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
                <WorkoutCard onPress={goToWorkout} date='12 mai' title='Nom de la séance' />
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
  
  