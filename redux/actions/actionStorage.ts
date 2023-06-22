import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../../model/user/UserType';
import { STORE_CONNECTED_USER, USER_ERROR } from '../constants';
 

 // #region ASYNC STORAGE : User
 export const setStorageError = (error: any) => {
    return {
      type: USER_ERROR,
      payload: error,
    };
  }

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
            console.log("cote api le user en get :", jsonUser);
            return jsonUser !== null ? JSON.parse(jsonUser) : null;
        } catch(e) {
            console.log("An error occurred", e);
        }
    }

  export const removeConnectedUser = async () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('connected_user')
        } catch(e) {
            console.log("An error occurred", e);
            dispatch(setStorageError(e));
        }
    }
  }

  export const clearAllStorage = async () => {
    return async dispatch => {
        try {
            await AsyncStorage.clear()
          } catch (e) {
            console.log("An error occurred", e);
            dispatch(setStorageError(e));
          }
    }
    
  }

// #endregion ASYNC STORAGE : User
  