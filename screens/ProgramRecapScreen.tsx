import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { users } from '../data/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { getProgramByID } from '../redux/actions/actionProgram';
import { programs } from '../data/ProgramData';


export default function ProgramRecapScreen() {
  const navigation = useNavigation();

   // @ts-ignore
   const { program } = useSelector(state => state.program);
   const dispatch = useDispatch();

  // @ts-ignore
  const route = useRoute<RouteProp<RootStackParamList, 'ProgramRecap'>>();
  const programId = route.params;
  // const programDetail = dispatch(getProgramByID(programId));
  const programDetail = programs.find(p => p._id === programId);

  // console.log(programDetail);

  // TODO remplacer users par les vrais users
  const numberOfUsers = users.filter(user => user.program === programDetail._id).length;

  function chooseProgram() {
    // Get the user, and add the program to it
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