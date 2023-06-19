import { UserType } from '../../model/user/UserType';
import { SET_PROGRAM_LEVEL, SET_PROGRAM_NAME, SET_PROGRAM_OBJECTIVE } from '../constants';

export const setProgramName = (name: string) => {
    return {
      type: SET_PROGRAM_NAME,
      payload: name,
    };
  };
  
  export const setProgramLevel = (lvl: string) => {
    return {
      type: SET_PROGRAM_LEVEL,
      payload: lvl,
    };
  };

  export const setProgramObjective = (obj: string) => {
    return {
      type: SET_PROGRAM_OBJECTIVE,
      payload: obj,
    };
  };

  const url = process.env.API_URL + "/programs";

  export const getProgramByID = (id: string) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const userPromise = await fetch(url + `/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        //Then use the json method to get json data from api/
        const userJson = await userPromise.json();
        console.log(userJson);
        dispatch(userJson);
        // return userJson;
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  