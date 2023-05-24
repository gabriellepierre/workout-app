import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


interface SearchButtonProps {
  style?: ViewStyle;
}

const SearchButton: React.FC<SearchButtonProps> = ({ style }) => {
  const buttonStyles = [styles.button, style];
  const navigation = useNavigation();

  function toSearchScreen() {
//     navigation.navigate('Search');

  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={toSearchScreen}>
      <Ionicons name="md-search" size={24} color="#565656" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 40,
    alignItems: "center",
  },
});

export default SearchButton;
