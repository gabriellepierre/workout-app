import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface PrimaryInputProps {
  onWrite: (textValue: string) => void;
  dark: boolean;
  placeholderText: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({ onWrite, dark, placeholderText,style, secureTextEntry }) => {
  const [textValue, setTextValue] = useState('');
  const textStyle = [styles.textInput, style];

  let placeholderColor = "#A9A9A9";

  if (dark) {
    textStyle.push(styles.borderWhite);
    placeholderColor = "#D3D3D3";
  } else {
    textStyle.push(styles.borderSlate);
    // textStyle.push({ borderColor: "#4e5a65", });
  }

  const onChangeValue = (e) => {
    setTextValue(e);
    onWrite(textValue);
  };

  const handleInput = () => {
    onWrite(textValue);
  };

  return (
      <View style={styles.inputBar}>
        <TextInput
          style={textStyle}
          placeholder={placeholderText}
          placeholderTextColor={placeholderColor}
          onChangeText={setTextValue}
          onEndEditing={onChangeValue}
          onSubmitEditing={handleInput}
          secureTextEntry={secureTextEntry}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  
  borderWhite : {
    borderBottomWidth: 2,
    borderColor: "white",
    color: "white",
  },
  borderSlate: {
    borderBottomWidth: 2,
    borderColor: "#364d53",
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default PrimaryInput;
