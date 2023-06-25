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

export default function SearchScreen() {
    const title = "Workout";
    const subtitle = "Rechercher un programme";
    // Todo : replace the raw data with user data

    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("");

      // @ts-ignore
    const programStore = useSelector(state => state.appReducer.program);

    const [programsFiltered, setProgramsFiltered] = useState(programStore.allPrograms);
    
    const handleSearch = (searchText: string) => {
      setSearchTerm(searchText);

      // console.log(searchText.toUpperCase());
      // const updatedData = programStore.allPrograms.filter((item) => item.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1);
      // console.log(updatedData);
    

        if(searchTerm !== '') {
          const filteredPrograms =  programStore.allPrograms.filter((item) => item.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1);
          setProgramsFiltered(filteredPrograms);
        }
        
        // setProgramsFiltered
      };

      const [openFilter, setOpenFilter] = useState(false);

      const handleFilter = (filters) => {

        if (filters.objective) {
          setProgramsFiltered(programsFiltered.filter(p => p.objective === filters.objective));
        }
        if (filters.level === null) {
          setProgramsFiltered(programStore.allPrograms);
        }

        if (filters.level) {
          setProgramsFiltered(programsFiltered.filter(p => p.level === filters.level));
        } else if (filters.objective === null) {
          setProgramsFiltered(programStore.allPrograms);
        }
      }
      
      // const createProgram = () => {
      //   //TODO: navigate to program creation page
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
              <SearchBar onSearch={handleSearch}/>
            </View>
            <View style={styles.flexed}>
              <PrimaryButton title="Filtrer" onPress={() => setOpenFilter(true)} icon={<FontAwesome size={15} name={"filter"} color="white" style={{marginHorizontal: 5}} />}/>
            </View>
          </View>
          {openFilter && 
            <FilterModal visible={openFilter} onModalData={handleFilter} onClose={() => setOpenFilter(false)}/>
          }
        {programsFiltered?.length > 0 ? 
          <FlatList
            data={programsFiltered}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item  } : {item: ProgramType}) => (
              
              <TouchableOpacity onPress={() => gotToProgram(item._id)}>
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
        // TODO : faire en sorte que la section prenne la largeur de l'écran
    },
    

  });
  
  