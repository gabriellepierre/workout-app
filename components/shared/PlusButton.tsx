import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


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
    buttonStyles.push({ backgroundColor: "#364d53" });
  }

  const navigation = useNavigation();

  if(!onPress) {
    //@ts-ignore
    onPress = () => navigation.navigate("Workout");
  }

  return (
    
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <FontAwesome size={40} name={"plus"} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    height: 70, 
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlusButton;
