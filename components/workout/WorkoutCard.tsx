import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface WorkoutCardProps {
  onPress: (id) => void;
  title: string;
  date: string;
  id: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ onPress, title, date, id }) => {

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Text style={[styles.title] } numberOfLines={1}>{title}</Text>
      {date && 
        <Text style={styles.date}>Du {date}</Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#ec9374",
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
