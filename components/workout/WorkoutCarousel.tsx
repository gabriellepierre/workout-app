import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';
import PrimaryButton from '../shared/PrimaryButton';

const carouselData = [
    { id: 1, title: 'Nom de la séance', date: '12 mai' },
    { id: 2, title: 'Nom de la 2eme séance', date: '10 mai' },
    { id: 3, title: 'Nom de la 3eme séance', date: '3 mai' },
    { id: 4, title: 'Nom de la 3eme séance', date: '1 avril' },
    // TODO Ajoutez les autres éléments de votre carrousel
  ];

  // TODO : Ajouter le type Workout et faire passer la data en callback
// type WorkoutData = Workout[];
  
const MAX_TITLE_LENGTH = 13; // longueur maximale du titre

 const WorkoutCarousel: React.FC = (
  // carouselData: WorkoutData
  ) => {

  function truncatedTitle(title: string) {
    const truncatedTitle = title.length > MAX_TITLE_LENGTH
    ? title.slice(0, MAX_TITLE_LENGTH) + '...'
    : title;

    return truncatedTitle;
  }

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
                <WorkoutCard onPress={goToWorkout} date={item.date} title={truncatedTitle(item.title)} />
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
  
  