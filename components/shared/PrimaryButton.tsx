import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title, color, style, textStyle }) => {
  const buttonStyles = [styles.button, style];
  if (color) {
    buttonStyles.push({ backgroundColor: color });
  } else {
    buttonStyles.push({ backgroundColor: "#565656" });
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 30,
    width: "50%"
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PrimaryButton;
