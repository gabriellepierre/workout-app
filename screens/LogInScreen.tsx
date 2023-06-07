import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LogInScreen() {

  const navigation = useNavigation();
  function emailInput() {
    // TODO: register email
  }

  function handleLogIn () {
    // TODO: log in
    //@ts-ignore
    navigation.navigate("Home");
  }

  function pwdInput() {
    // TODO: register email
  }

  function toSignInScreen() {
    //@ts-ignore
    navigation.navigate("SignIn");
  }
    return (
      <Layout dark={true}>
        <View style={styles.container}>
          <Title title='Workout' subtitle='Se connecter' dark={true}/>
          <View style={styles.form}>
            <PrimaryInput dark={true} onWrite={emailInput} placeholderText="EMAIL / PSEUDO"/>
            <PrimaryInput dark={true} onWrite={pwdInput} placeholderText="MOT DE PASSE"/>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={handleLogIn} title='Se connecter' color="white" textStyle={{color: "black"}}/>
            <TouchableOpacity onPress={toSignInScreen}>
              <Text style={styles.signIn}> Ou s'inscrire</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.centered, styles.form]}>
            <Ionicons name="barbell-outline" size={50} color="white" />
          </View>
        </View>
      </Layout>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "white",
    },
    centered: {
      alignItems: "center"
    },
    form: {
      marginVertical: 100,
    },
    signIn: {
      color: "white",
      textTransform: "uppercase",
      marginVertical: 20,
      textDecorationLine: "underline"
    }
  });