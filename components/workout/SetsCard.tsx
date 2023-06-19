import React, { ReactNode, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import Exercise from './Exercise';
import { ExerciseType } from '../../model/workout/ExerciseType';
import { exercises } from '../../data/ExercisesData';
import Set from './Set';

interface SetsCardProps {
  exercise: ExerciseType;
  style?: boolean;
}

const SetsCard: React.FC<SetsCardProps> = ({ exercise, style }) => {
  const cardStyle = [styles.card];

  const [open, setOpen] = useState(false)

  return (
    <Card style={cardStyle}>
      <Card.Content>
        <TouchableOpacity onPress={() => setOpen(!open)}>
            <View style={styles.justifiedContent}>
              <Exercise exercise={exercise} style={style}/>

              {open ?
                  <Ionicons name="chevron-up-outline" size={24} color="white" />
              :
                  <Ionicons name="chevron-down-outline" size={24} color="white" /> 
              }
            </View>
        </TouchableOpacity>

        {open && (
            <View style={styles.setSection}>
                 {/* <FlatList
                    data={exercises}
                    
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        {item.name}
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    contentContainerStyle={styles.gridContainer}
                  /> */}
                <View style={styles.setTitleSection}>
                    <Text style={styles.setTitle}>Série</Text>
                    <Text style={styles.setTitle}>Répétitions</Text>
                    <Text style={styles.setTitle}>Poids (kg)</Text>
                </View>
                <View>
                  {/* <FlatList
                    data={exercises}
                    renderItem={({ item }) => {
                        // <Set 
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    contentContainerStyle={styles.gridContainer}
                /> */}
                </View>
            </View>
        )}
          
        
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: "#364d53"
  },
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
  setSection: {
    marginTop: 20,
    flex: 4,
    marginHorizontal: "auto",
  },
  setTitleSection: {
    flexDirection: "row",
    paddingBottom: 10
  },
  setTitle: {
    fontWeight: "bold",
    color: "white",
  },
  setParamsSection: {

  },
  setNumber: {

  },
  addSetButton: {

  },
  deleteSetButton: {

  },
  setParamInput: {

  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default SetsCard;
