import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import {useState} from 'react';
import SearchBar from '../components/search/SearchBar';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { FontAwesome } from "@expo/vector-icons";
import FilterModal from '../components/search/FilterModal';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const title = "Workout";
    const subtitle = "Rechercher un programme ou une séance";
    // Todo : replace the raw data with user data

    const navigation = useNavigation();

    function search() {
        console.log("searching...");
    }

    const handleSearch = (searchText: string) => {
        console.log('Recherche effectuée:', searchText);
        //TODO: Logique de recherche à implémenter ici

      };

      const [openFilter, setOpenFilter] = useState(false);

      const handleFilter = () => {
        setOpenFilter(true);
        //TODO: Logique de filtre ici
      }
      
      const createProgram = () => {
        //TODO: navigate to program creation page
        // @ts-ignore
        navigation.navigate("Program");
      }
    
    return (
      <Layout>
        <View style={styles.container}>
          <Title title={title} subtitle={subtitle} />
          {/* style={styles.searchHeader} */}

          <View style={styles.searchHeader}>
            <View style={styles.flexed}>
              <SearchBar onSearch={handleSearch}/>
            </View>
            <View style={styles.flexed}>
              <PrimaryButton title="Filtrer" onPress={handleFilter} icon={<FontAwesome size={15} name={"filter"} color="white" style={{marginHorizontal: 5}} />}/>
            </View>
          </View>
          {openFilter && 
            <FilterModal visible={openFilter} onClose={() => setOpenFilter(false)}/>
          }
          <View style={styles.centered}>
            <View>
              <PrimaryButton title="Créer un programme" onPress={createProgram} />
            </View>
          </View>

        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
    },
    flexed: {
      flex: 1,
    },
    // Style log out button
    centered : {
        alignItems: "center",
        marginVertical: 50
    },
    searchHeader: {
        flexDirection: "row",
        width: "100%",
        // TODO : faire en sorte que la section prenne la largeur de l'écran
    },
    

  });
  
  