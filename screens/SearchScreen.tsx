import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';
import Title from '../components/shared/Title';
import PrimaryButton from '../components/shared/PrimaryButton';
import PlusButton from '../components/shared/PlusButton';
import SearchBar from '../components/search/SearchBar';

export default function SearchScreen() {
    const title = "Workout";
    const subtitle = "Rechercher un programme ou une séance";
    // Todo : replace the raw data with user data

    function search() {
        console.log("searching...");
    }

    const handleSearch = (searchText: string) => {
        console.log('Recherche effectuée:', searchText);
        //TODO: Logique de recherche à implémenter ici

      };

      const handleFilter = () => {
        //TODO: Logique de filtre ici
      }
    
    return (
      <View style={styles.container}>
        <Title title={title} subtitle={subtitle} />

        {/* <View style={styles.searchHeader}> */}
           <SearchBar onSearch={handleSearch}/>
           {/* <PrimaryButton title="Filter" onPress={handleFilter}/> */}
        {/* </View> */}
        <View style={styles.centered}>
            {/*  */}
        </View>
        {/* <PlusButton onPress={logOut}/> */}

      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
    },
    // Style log out button
    centered : {
        alignItems: "center",
        marginVertical: 50
    },
    searchHeader: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    

  });
  
  