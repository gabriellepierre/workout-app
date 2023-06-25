import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ExerciseType } from '../../model/workout/ExerciseType';

interface ExerciseProps {
    exercise: ExerciseType;
    style?: boolean;
  }

const Exercise: React.FC<ExerciseProps> = ({exercise, style}) => {
  const titleStyle = [styles.title];
  const bodyPartStyle = [styles.bodyPart];
  var barbellColor = "white";

  if(!style) {
    //@ts-ignore
    titleStyle.push({ color: "#364d53" });
    //@ts-ignore
    bodyPartStyle.push({ color: "#364d53" });
    barbellColor = "#364d53";
  }

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <View style={styles.justifiedContent}>
      {!isImageLoaded &&
         <Ionicons name="barbell-outline" size={50} color={barbellColor} style={{marginRight: -50}} />
      }
        <Image
          style={styles.image}
          source={{uri: exercise.image}}
          onLoad={handleImageLoad}
        /> 

        <View>
            <Text style={titleStyle} numberOfLines={1}>{exercise.name}</Text>

            <Text style={bodyPartStyle} numberOfLines={1}>{exercise.musclesEngaged}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    // display: "inline-flex",
  },
  justifiedContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 75,
    height: 75,
    margin: -10,
    marginRight: 5
  },
  bodyPart: {
    fontSize: 15,
    color: "white",
  },
});

export default Exercise;
