import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface ProgramCardProps {
  onPress: () => void;
  title: string;
  objective: string;
  workoutName: string;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ onPress, title, objective, workoutName, color, style, textStyle }) => {
  const cardStyles = [styles.card, style];
  if (color) {
    cardStyles.push({ backgroundColor: color });
  } else {
    cardStyles.push({ backgroundColor: "#565656" });
  }

  return (
    <TouchableOpacity style={cardStyles} onPress={onPress}>
        <View>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            <Text style={[styles.date, textStyle]}>- {objective}</Text>
        </View>
         <View>
            <Text>Séance du jour :</Text>
            <Text style={[styles.title, textStyle]}>{workoutName}</Text>
         </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: "50%",
    backgroundColor: "#565656",
    borderRadius: 15,
    
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
  },
  date: {
    marginVertical: 20,
    fontSize: 15,
    color: "white",
    textTransform: "uppercase",
  },
});

export default ProgramCard;
