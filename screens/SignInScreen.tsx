import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/actionUser';
import { UserType } from '../model/user/UserType';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [userState, setUserState] = useState<UserType>();
  const [isError, setIsError] = useState(false);

  // @ts-ignore
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setUserState({...userState, email: e});
  };

  const handlePseudo = (e) => {
    // TODO: register pseudo
    setUserState({...userState, pseudo: e});

  }

  const handlePassword= (e) => {
    // TODO: register pwd
    setUserState({...userState, password: e});
  }

  function handleSignIn () {
    
    if(userState !== undefined) {
      // @ts-ignore
      dispatch(addUser(userState));
      const registerUser = async () => {
        // @ts-ignore
        await dispatch(storeConnectedUser(userState));
      };
      registerUser();

      //@ts-ignore
      navigation.navigate("Home");
    } else {
      console.log("User's props aren't set properly");
      setIsError(true);
    }
  }

    return (
      <Layout dark={true}>
        <View style={styles.container}>
          <Title title='Workout' subtitle='Création de compte' dark={true}/>
          <View style={styles.form}>
            <PrimaryInput dark={true} onWrite={handleEmail}placeholderText="EMAIL"/>
            <PrimaryInput dark={true} onWrite={handlePseudo} placeholderText="PSEUDO"/>
            <PrimaryInput dark={true} onWrite={handlePassword} placeholderText="MOT DE PASSE" secureTextEntry={true}/>
            {isError &&
              <View style={styles.error}>
                <Text style={{color: "#de7a6f", fontSize: 16, fontWeight:'500'}}>Nous n'avons pas réussi à vous inscrire.</Text>
              </View>
            }
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
    },
    error:{
      justifyContent: "flex-end",
      width: "120%",
      color: "white",
      padding: 15,
      alignItems: "center",
      margin: -20
    },
  });
  