import React, { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { ExerciseType } from '../../model/workout/ExerciseType';
import Exercise from './Exercise';

interface ExerciseCardProps {
  exercise: ExerciseType;
  checkbox?: ReactNode;
  style?: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, checkbox, style }) => {
  const cardStyle = [styles.card];

  if(style) {
    //@ts-ignore
    cardStyle.push({ backgroundColor: "#ec9374" });
  }

  return (
    <Card style={cardStyle}>
      <Card.Content>
        <View style={styles.justifiedContent}>
          <Exercise exercise={exercise} style={style}/>

          {checkbox}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
  },
  justifiedContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ExerciseCard;
