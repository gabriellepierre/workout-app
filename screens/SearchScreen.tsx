import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import PlusButton from '../components/PlusButton';
import SearchBar from '../components/SearchBar';

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
    
    return (
      <View style={styles.container}>
        <Title title={title} subtitle={subtitle} />

        <View >
           <SearchBar onSearch={handleSearch}/>
        </View>
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
    // Style user data
    flexed: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    between: {
        justifyContent: "space-between",

    },
    properties: {
        textTransform: "uppercase",
        color: "#565656",
    },
    userData: {
        fontWeight: "bold",
        color: "#565656",

    },
    // Style log out button
    centered : {
        alignItems: "center",
        marginVertical: 50
    }

  });
  
  