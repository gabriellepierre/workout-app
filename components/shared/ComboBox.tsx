import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ComboBox = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const selectedOptionTextStyle = [styles.selectedOptionText];

  if (!selectedOption) {
    // @ts-ignore
    selectedOptionTextStyle.push({color: "grey"});
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={selectedOptionTextStyle}>{selectedOption || 'Sélectionner...'}</Text>
        {isOpen ?
            <Ionicons name="chevron-up-outline" size={24} color="#364d53" />
        :
            <Ionicons name="chevron-down-outline" size={24} color="#364d53" /> 
        }
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            option === selectedOption ? 
                (<TouchableOpacity
                    key={index}
                    style={[styles.optionButton, styles.selectedButton]}
                    onPress={() => handleOptionSelect("")}
                >
                    <Text style={[styles.selectedOptionText, styles.selectedButton]}>{option}</Text>
                </TouchableOpacity>)
            :
            (<TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option)}
            >
                <Text style={styles.selectedOptionText}>{option}</Text>
            </TouchableOpacity>)
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dropdownButton: {
    borderBottomWidth: 2,
    borderColor: '#364d53',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedOptionText: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  selectedButton: {
    backgroundColor: "#ec9374",
    color: "white"
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: "white",
    maxHeight: 150,
    overflow: 'scroll',
    zIndex: 1,
  },
  optionButton: {
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor: '#364d53',
  },
});

export default ComboBox;
