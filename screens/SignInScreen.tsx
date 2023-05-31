import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen() {
  const navigation = useNavigation();
  function emailInput() {
    // TODO: register email
  }

  function usernameInput() {
    // TODO: register email
  }

  function pwdInput() {
    // TODO: register email
  }

  function handleSignIn () {
    // TODO: sign in
  }

    return (
      <Layout dark={true}>
        <View style={styles.container}>
          <Title title='Workout' subtitle='Création de compte' dark={true}/>
          <View style={styles.form}>
            <PrimaryInput dark={true} onWrite={emailInput} placeholderText="EMAIL"/>
            <PrimaryInput dark={true} onWrite={usernameInput} placeholderText="PSEUDO"/>
            <PrimaryInput dark={true} onWrite={pwdInput} placeholderText="MOT DE PASSE"/>
          </View>
          <View style={styles.centered}>
            <PrimaryButton onPress={handleSignIn} title="S'inscrire" color="white" textStyle={{color: "black"}}/>
            <TouchableOpacity onPress={navigation.goBack}>
              <Text style={styles.signIn}> Ou se connecter</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.centered, {marginVertical: 100} ]}>
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
      marginVertical: 66,
    },
    signIn: {
      color: "white",
      textTransform: "uppercase",
      marginVertical: 20,
      textDecorationLine: "underline"
    }
  });
  