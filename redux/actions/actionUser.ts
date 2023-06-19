import { UserType } from '../../model/user/UserType';
import {SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER_PROGRAM, SET_USER_PSEUDO} from '../constants';

export const setEmail = (email: string) => {
    return {
      type: SET_USER_EMAIL,
      payload: email,
    };
  };
  
  export const setPassword = (password: string) => {
    return {
      type: SET_USER_PASSWORD,
      payload: password,
    };
  };

  export const setPseudo = (pseudo: string) => {
    return {
      type: SET_USER_PSEUDO,
      payload: pseudo,
    };
  };

  export const setUserProgram = (programId: string) => {
    return {
      type: SET_USER_PROGRAM,
      payload: programId,
    };
  };

  const url = process.env.API_URL + "/users";

  // export const getUsers = () => {
  //   //In order to use await your callback must be asynchronous using async keyword.
  //   return async dispatch => {
  //     //Then perform your asynchronous operations.
  //     try {
  //       const userPromise = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         }
  //       });
  //       //Then use the json method to get json data from api/
  //       const userJson = await userPromise.json();
  //       dispatch(userJson);
  //     } catch (error) {
  //       console.log('Error---------', error);
  //       //You can dispatch to another action if you want to display an error message in the application
  //       //dispatch(fetchDataRejected(error))
  //     }
  //   }
  // }

  export const addUser = (user: UserType) => {
    return async dispatch => {
      try {
        const userPromise = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const userJson = await userPromise.json();
        dispatch(setEmail(userJson.email), setPassword(userJson.password), setPseudo(userJson.pseudo));
        return userPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }
  
  
  