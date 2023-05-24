import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';
import Title from '../components/shared/Title';
import PrimaryButton from '../components/shared/PrimaryButton';
import PlusButton from '../components/shared/PlusButton';

export default function AccountScreen() {
    const title = "Workout";
    const subtitle = "Mon compte";
    // Todo : replace the raw data with user data

    function logOut() {
        //TODO: log out
        console.log("logged out");
    }
    return (
      <View style={styles.container}>
        <Title title={title} subtitle={subtitle} />
        <View >
            <View style={styles.flexed}>
                <Text style={styles.properties}>Pseudo :</Text>
                <Text style={styles.userData}>User pseudo</Text>
            </View>
            <View style={styles.flexed}>
                <Text style={styles.properties}>Email :</Text>
                <Text style={styles.userData}>user.pseudo@email.com</Text>
            </View>
            <View style={styles.flexed}>
                <Text style={styles.properties}>Nombre de séance :</Text>
                <Text style={styles.userData}>20</Text>
            </View>
        </View>
        <View style={styles.centered}>
            <PrimaryButton onPress={logOut} title="Se déconnecter" color="#c91a07"/>
        </View>

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
  
  