import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

import { SetType } from '../../model/workout/SetType';

interface SetProps {
  set: SetType,
}

const Set: React.FC<SetProps> = ({ set }) => {
  return (
    <Card style={styles.card}>
      <View>
        {set.setNumber}
      </View>
      <View>
        {set.reps}
      </View>
      <View>
        {set.weight}
      </View>
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

export default Set;
