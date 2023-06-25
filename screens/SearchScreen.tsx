import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import {useState} from 'react';
import SearchBar from '../components/search/SearchBar';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { FontAwesome } from "@expo/vector-icons";
import FilterModal from '../components/search/FilterModal';
import { useNavigation } from '@react-navigation/native';
import ProgramSearched from '../components/search/ProgramSearched';
import { ProgramType } from '../model/program/ProgramType';
import { useSelector } from 'react-redux';
import { useSearch } from '../hooks/useSearch';

export default function SearchScreen() {
    const title = "Workout";
    const subtitle = "Rechercher un programme";

    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("");

      // @ts-ignore
    const programStore = useSelector(state => state.appReducer.program);

    var searchedPrograms = useSearch(searchTerm, programStore?.allPrograms);

    const [programs, setPrograms] = useState(null);

    const [openFilter, setOpenFilter] = useState(false);
    
    // NOTATION : Binding child component props
      const handleFilter = (filters) => {

        if (filters.objective && !filters.level) {
          setPrograms(searchedPrograms.filter(p => p.objective === filters.objective));
        } else if (filters.level && !filters.objective) {
          setPrograms(searchedPrograms.filter(p => p.level === filters.level));
        } else if (filters.level && filters.objective) {
          setPrograms(searchedPrograms.filter(p => p.level === filters.level && p.objective === filters.objective));
        } else {
          setPrograms(null);
        }
      }
      
      // const createProgram = () => {
      //   // @ts-ignore
      //   navigation.navigate("Program");
      // }

    const gotToProgram = (item: string) => {
      // @ts-ignore
      navigation.navigate('ProgramRecap', item);
    };



    return (
      <Layout>
        <View style={styles.container}>
          <Title title={title} subtitle={subtitle} />
          {/* style={styles.searchHeader} */}

          <View style={styles.searchHeader}>
            <View style={styles.flexed}>
              <SearchBar onSearch={setSearchTerm}/>
            </View>
            <View style={styles.flexed}>
              <PrimaryButton title="Filtrer" onPress={() => setOpenFilter(true)} icon={<FontAwesome size={15} name={"filter"} color="white" style={{marginHorizontal: 5}} />}/>
            </View>
          </View>
          {openFilter && 
          // NOTATION : Binding child component props
            <FilterModal visible={openFilter} onModalData={handleFilter} onClose={() => setOpenFilter(false)}/>
          }
        {searchedPrograms?.length > 0 || programs?.length > 0 ? 
          <FlatList
            data={programs ? programs : searchedPrograms}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item  } : {item: ProgramType}) => (
              <TouchableOpacity onPress={() => gotToProgram(item?._id)}>
                <ProgramSearched program={item} />
              </TouchableOpacity>
            )}
          />
        : 
          <Text>Aucun résultat ne correspond à la recherche</Text>
        }
        
          

          {/* <View style={styles.centered}>
            <View>
              <PrimaryButton title="Créer un programme" onPress={createProgram} />
            </View>
          </View> */}

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
        // la section prend pas encore toute la largeur de l'écran
    },
    

  });
  
  