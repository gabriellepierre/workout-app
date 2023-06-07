import React, { ReactNode }  from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title, color, style, textStyle, icon }) => {
  const buttonStyles = [styles.button, style];
  if (color) {
    buttonStyles.push({ backgroundColor: color });
  } else {
    buttonStyles.push({ backgroundColor: "#364d53" });
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <View style={styles.justified}>
        {icon}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
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
  justified: {
    flexDirection: "row",
    justifyContent: "center",
  }
});

export default PrimaryButton;
