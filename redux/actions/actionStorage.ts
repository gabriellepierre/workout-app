import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../../model/user/UserType';
 

 // #region ASYNC STORAGE : User
 export const storeConnectedUser = async (user: UserType) => {
    try {
      const jsonUser = JSON.stringify(user)
      await AsyncStorage.setItem('connected_user', jsonUser);
    } catch (e) {
      console.log("An error occurred", e);
    }
  }

  export const getConnectedUser = async () => {
    try {
      const jsonUser = await AsyncStorage.getItem('connected_user')
      return jsonUser != null ? JSON.parse(jsonUser) : null;
    } catch(e) {
      console.log("An error occurred", e);
    }
  }

  export const removeConnectedUser = async () => {
    try {
      await AsyncStorage.removeItem('connected_user')
    } catch(e) {
      console.log("An error occurred", e);
    }
  }

  export const clearAllStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log("An error occurred", e);
    }
  }

// #endregion ASYNC STORAGE : User
  