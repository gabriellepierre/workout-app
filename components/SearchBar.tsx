import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBar}>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="md-search" size={24} color="#565656" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="RECHERCHER"
        placeholderTextColor="grey"
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#565656',
  },
  searchButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default SearchBar;
