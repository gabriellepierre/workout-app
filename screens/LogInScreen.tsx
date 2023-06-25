import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/shared/Title';
import Layout from '../components/layouts/Layout';
import PrimaryInput from '../components/shared/PrimaryInput';
import PrimaryButton from '../components/shared/PrimaryButton';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { UserType } from '../model/user/UserType';
import { storeConnectedUser } from '../hooks/asyncStorage/actionStorage';

export default function LogInScreen() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const blockGoBack = () => {
      navigation.addListener('beforeRemove', (e) => {
        // Vérifier si l'écran est en focus
        if (isFocused) {
          // Ignorer la navigation "goBack"
          e.preventDefault();
        }
      });
    };

    // Ajouter l'écouteur pour bloquer le "goBack" lors du montage de l'écran
    blockGoBack();

    // Nettoyer l'écouteur lorsque l'écran est démonté
    return () => {
      navigation.removeListener('beforeRemove', () => {});
    };
  }, [isFocused, navigation]);

  const [userConnexion, setUserConnexion] = useState<UserType>();
  const [isError, setIsError] = useState(false);


  // @ts-ignore
  const {usersList} = useSelector(state => state.appReducer.user);

  function emailInput(e) {
    setUserConnexion({...userConnexion, email: e})
  }

  function pwdInput(e) {
    setUserConnexion({...userConnexion, password: e})
  }

  function handleLogIn () {
    if(userConnexion) {
      const isRegistered = usersList.filter(user => user.email === userConnexion.email && user.password === userConnexion.password);
      if(isRegistered.length > 0) {
        // Register user in storage
        // @ts-ignore
        const registerUser = async () => {
          // @ts-ignore
          await storeConnectedUser(isRegistered[0]);
        };
        registerUser();
        
        //@ts-ignore
        navigation.navigate("Home");
      } else {
        setIsError(true);
      }
    } else {
      setIsError(true);
    }
    
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
            <PrimaryInput dark={true} onWrite={emailInput} placeholderText="EMAIL"/>
            <PrimaryInput dark={true} onWrite={pwdInput} placeholderText="MOT DE PASSE" secureTextEntry={true}/>
            {isError &&
              <View style={styles.error}>
                <Text style={{color: "#de7a6f", fontSize: 16, fontWeight:'500'}}>Nous n'avons pas réussi à vous connecter.</Text>
              </View>
            }
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