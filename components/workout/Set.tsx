import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, TextInput } from 'react-native-paper';

interface SetProps {
  number: number;
  setRep: () => void;
  setWeight: () => void;
}

const Set = ({props}: {props: SetProps}) => {
  return (
    <Card style={styles.card}>
      <View>
        <Text>{props.number}</Text>
      </View>
      <View>
        <TextInput
          style={styles.textSetInput}
          placeholder=""
          placeholderTextColor=""
          onChangeText={props.setRep}
        />
      </View>
      <View>
        <TextInput
          style={styles.textSetInput}
          placeholder=""
          placeholderTextColor=""
          onChangeText={props.setWeight}
        />
      </View>
      
      
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: "#364d53"
  },
  textSetInput: {
    backgroundColor: "white",
    borderRadius: 15,

  }
});

export default Set;
