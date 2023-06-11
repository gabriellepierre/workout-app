import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ExerciseType } from '../../model/workout/ExerciseType';

interface ExerciseProps {
    exercise: ExerciseType;
    style?: boolean;
  }

const Exercise: React.FC<ExerciseProps> = ({exercise, style}) => {
  const titleStyle = [styles.title];
  const bodyPartStyle = [styles.bodyPart];

  if(!style) {
    //@ts-ignore
    titleStyle.push({ color: "#364d53" });
    //@ts-ignore
    bodyPartStyle.push({ color: "#364d53" });
  }

  return (
    <View style={styles.justifiedContent}>
        {exercise.image}

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
  bodyPart: {
    fontSize: 15,
    color: "white",
  },
});

export default Exercise;
