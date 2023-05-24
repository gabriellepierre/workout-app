import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface ProgramCardProps {
  onPress: () => void;
  title: string;
  objective: string;
  workoutName: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ onPress, title, objective, workoutName}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={[styles.flexed, styles.between]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.objective}>- {objective}</Text>
        </View>
         <View style={styles.flexed}>
            <Text style={styles.workoutTitle}>Séance du jour : </Text>
            <Text style={styles.workoutName}>{workoutName}</Text>
         </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: "100%%",
    backgroundColor: "#565656",
    borderRadius: 15,
    
  },
  flexed: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  between: {
      justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
  },
  workoutTitle: {
    marginVertical: 10,
    fontSize: 15,
    color: "white",
    textTransform: "uppercase",
  }, 
  workoutName: {
    marginVertical: 10,
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  objective: {
    fontSize: 10,
    color: "white"
  },
  
});

export default ProgramCard;
