import {useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, updateUser } from '../redux/actions/actionUser';
import {useEffect} from 'react';
import { getAllPrograms, getProgramByID } from '../redux/actions/actionProgram';
import { getConnectedUser } from '../redux/actions/actionStorage';
import { UserType } from '../model/user/UserType';


export default function ProgramRecapScreen() {
  const navigation = useNavigation();

  const [user, setUser] = useState<UserType>();

  const loadUsers = async () => {
    // @ts-ignore
      await dispatch(getUsers());
    };
    
  loadUsers();
   // @ts-ignore
   const allPrograms = useSelector(state => state.appReducer.program);
   
   const dispatch = useDispatch();
   

  // @ts-ignore
  const route = useRoute<RouteProp<RootStackParamList, 'ProgramRecap'>>();
  const programId = route.params;

  const programDetail = allPrograms.allPrograms.find(p => p._id === programId);
  
  // @ts-ignore
  const {usersList} = useSelector(state => state.appReducer.user);
  
  const numberOfUsers = usersList?.filter(user => user.program === programDetail._id).length;

  useEffect(() => {
    const loadProgram = async () => {
    // @ts-ignore
      await dispatch(getAllPrograms());
    };

   
    const loadUser = async () => {
      setUser(await getConnectedUser());
    };

    loadUser();

    loadProgram();
  }, [dispatch]);


  function chooseProgram() {
    // Get the user, and add the program to it
    // @ts-ignore
    dispatch(updateUser(user._id, {program: programId}));
    //@ts-ignore
    navigation.navigate("HomeScreen");
  }
    return (
      <Layout>
        <View style={styles.container}>
          <Title title={programDetail.name} subtitle={programDetail.objective} />
          <View>
              <Text style={styles.params}>Suivi par {numberOfUsers ? numberOfUsers : "0"} <Ionicons name="person" size={20} color="black" /></Text>
            <Text style={styles.params}>Nombre de séances : {programDetail.seances ? programDetail.seances.length : "0"}</Text>
            <Text style={styles.params}>Niveau : {programDetail.level}</Text>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={chooseProgram} title='Choisir ce programme' />
          </View>
        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    centered: {
      alignItems: "center",
      marginTop: 20
    },
    params: {
      textTransform: "uppercase",
      fontSize: 17,
      marginTop: 15,
    },
    flexed: {
      flexDirection: "row",
      alignItems: "center",

    }
  });