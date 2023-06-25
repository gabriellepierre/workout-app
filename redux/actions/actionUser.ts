
import { users } from '../../data/UserData';
import { UserType } from '../../model/user/UserType';
import {ADD_USER, SET_USERS, UPDATE_USER, USER_ERROR} from '../constants';

  export const setUsersList = (usersList: UserType[]) => {
    return {
      type: SET_USERS,
      payload: usersList,
    };
  };

  export const setUserError = (error: any) => {
    return {
      type: USER_ERROR,
      payload: error,
    };
  }

  const url = process.env.API_URL + "/users";
  
export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch(setUsersList(users));
    } catch (error) {
      dispatch(setUserError(error));
    }
  }
}

  export const addUser = (user: UserType) => {
    return async dispatch => {
      try {
        if(user !== undefined) {

          dispatch({
            type: ADD_USER,
            payload: user,
          });
        } else {
          throw new Error("User's props aren't set properly");
        }
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        dispatch(setUserError(error));
      }
    };
  };

  export const updateUser = (userId, newProperty) => {
    return async dispatch => {
      try {
        dispatch({
          type: UPDATE_USER,
          payload: {
            userId,
            newProperty,
          }
        });
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        dispatch(setUserError(error));
      }
    };
  };

 
  
  