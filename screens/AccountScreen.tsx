import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import PrimaryButton from '../components/shared/PrimaryButton';
import Layout from '../components/layouts/Layout';
import { useNavigation } from '@react-navigation/native';
import { getConnectedUser, removeConnectedUser } from '../hooks/asyncStorage/actionStorage';
import { UserType } from '../model/user/UserType';
import { useSelector } from 'react-redux';
import { useCurrentUser } from '../hooks/useCurrentUser';

export default function AccountScreen() {
    const title = "Workout";
    const subtitle = "Mon compte";

    const navigation = useNavigation();
    
    // @ts-ignore
    const workoutStore = useSelector(state => state.appReducer.workout);
    const workouts = workoutStore.workoutList;

    const user = useCurrentUser();

    const usersWorkout = workouts.filter(workout => workout.author === user?.email).length;



    function logOut() {
        const removeUserFromStorage = async () => {
            await removeConnectedUser();
            if(await getConnectedUser() === null) {
                // @ts-ignore
                navigation.navigate("Connexion");
            }
        };
        removeUserFromStorage();
        
    }
    return (
        <Layout>
        <View style={styles.container}>
            <Title title={title} subtitle={subtitle} />
            <View >
                <View style={styles.flexed}>
                    <Text style={styles.properties}>Pseudo :</Text>
                    <Text style={styles.userData}>{user?.pseudo}</Text>
                </View>
                <View style={styles.flexed}>
                    <Text style={styles.properties}>Email :</Text>
                    <Text style={styles.userData}>{user?.email}</Text>
                </View>
                <View style={styles.flexed}>
                    <Text style={styles.properties}>Nombre de séance :</Text>
                    <Text style={styles.userData}>
                        {usersWorkout ? usersWorkout : 0}
                        </Text>
                </View>
            </View>
            <View style={styles.centered}>
                <PrimaryButton onPress={logOut} title="Se déconnecter" color="#c91a07"/>
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
        color: "#4e5a65",
    },
    userData: {
        fontWeight: "bold",
        color: "#4e5a65",

    },
    // Style log out button
    centered : {
        alignItems: "center",
        marginVertical: 50
    }

  });
  
  