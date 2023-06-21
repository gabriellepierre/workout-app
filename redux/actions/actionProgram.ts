import { programs } from '../../data/ProgramData';
import { ProgramType } from '../../model/program/ProgramType';
import { GET_ALL_PROGRAMS, SET_ALL_PROGRAMS, SET_PROGRAM_LEVEL, SET_PROGRAM_NAME, SET_PROGRAM_OBJECTIVE } from '../constants';

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

  export const setAllPrograms = (allPrograms: ProgramType[]) => {
    return {
      type: SET_ALL_PROGRAMS,
      payload: allPrograms,
    };
  };

  const url = process.env.API_URL + "/programs";

  export const getAllPrograms = () => {
    return async dispatch => {
      try {
        // const userPromise = await fetch(url + `/${id}`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   }
        // });
        // dispatch(setAllPrograms(programs));
      dispatch({
        type: GET_ALL_PROGRAMS,
        payload: programs,
      });
      } catch (error) {
        console.log('Error---------', error);

        // En cas d'erreur, dispatch une action d'échec
        // dispatch({
        //   type: USERS_ERROR,
        //   payload: error.message,
        // });
      }
    }
  }

  export const getProgramById = (id: string) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const allPrograms = await dispatch(getAllPrograms());
        const program = allPrograms.filter(p => p.id === id);
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  