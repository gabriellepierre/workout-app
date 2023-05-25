import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


interface PlusButtonProps {
  onPress?: () => void;
  color?: string;
  style?: ViewStyle;
  
}

const PlusButton: React.FC<PlusButtonProps> = ({ onPress, color, style }) => {
  const buttonStyles = [styles.button, style];
  if (color) {
    buttonStyles.push({ backgroundColor: color });
  } else {
    buttonStyles.push({ backgroundColor: "#4e5a65" });
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <FontAwesome size={35} name={"plus"} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    width: "16%",
    alignItems: "center",
  },
});

export default PlusButton;
