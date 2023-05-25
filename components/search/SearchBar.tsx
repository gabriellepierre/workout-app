import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
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
        <Ionicons name="md-search" size={24} color="#4e5a65" />
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
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#4e5a65',
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
