import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface WorkoutCardProps {
  onPress: () => void;
  title: string;
  date: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ onPress, title, date }) => {

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Du {date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
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
  },
});

export default WorkoutCard;
