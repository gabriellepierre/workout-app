import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/shared/Title';
import PrimaryButton from '../components/shared/PrimaryButton';
import Layout from '../components/layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getConnectedUser, removeConnectedUser } from '../redux/actions/actionStorage';

export default function AccountScreen() {
    const title = "Workout";
    const subtitle = "Mon compte";
    
    // @ts-ignore
    const storage = useSelector(state => state.appReducer.storage);
    const user = storage.user;
    console.log("user dans la page account : ", user);

    // @ts-ignore
    // const { workoutList } = useSelector(state => state.appReducer.workouts);
    // const usersWorkout = workoutList?.filter(workout => workout.author === user._id).length;


    useEffect(() => {
        const loadUser = async () => {
            // @ts-ignore
            await getConnectedUser();
        };
        loadUser();
    }, [storage]);

    function logOut() {
        // @ts-ignore
        const removeUserFromStorage = async () => {
            // @ts-ignore
            await removeConnectedUser();
        };
        removeUserFromStorage();

        console.log("logged out");
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
                    <Text style={styles.userData}>20
                        {/* {usersWorkout ? usersWorkout : 0} */}
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
  
  