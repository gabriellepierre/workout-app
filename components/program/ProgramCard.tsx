import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { ProgramType } from '../../model/program/ProgramType';

interface ProgramCardProps {
  onPress: () => void;
  program: ProgramType;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ onPress, program}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={[styles.flexed, styles.between]}>
            <Text style={styles.title}>{program.name}</Text>
            <Text style={styles.objective}>- {program.objective}</Text>
        </View>
         <View style={styles.flexed}>
            <Text style={styles.workoutTitle}>Niveau : </Text>
            <Text style={styles.workoutName}>{program.level}</Text>
         </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: "100%%",
    backgroundColor: "#364d53",
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
    textTransform: "capitalize"
  },
  objective: {
    fontSize: 10,
    color: "white"
  },
  
});

export default ProgramCard;
