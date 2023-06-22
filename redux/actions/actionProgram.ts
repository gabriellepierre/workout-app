import { programs } from '../../data/ProgramData';
import { ProgramType } from '../../model/program/ProgramType';
import { ADD_PROGRAM, GET_ALL_PROGRAMS, GET_PROGRAM_BY_ID, SET_ALL_PROGRAMS, SET_PROGRAM_ERROR } from '../constants';

  export const setProgramError = (error: any) => {
    return {
      type: SET_PROGRAM_ERROR,
      payload: error,
    };
  }

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

  export const getProgramByID = (id: string) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const allPrograms: ProgramType[] = await dispatch(getAllPrograms());
        console.log('GET_PROGRAM_BY_ID', allPrograms);

        const program = allPrograms?.filter(p => p._id === id);

        dispatch({
          type: GET_PROGRAM_BY_ID,
          payload: program,
        })
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const addProgram = (program: ProgramType) => {
    return async dispatch => {
      try {
        dispatch({
          type: ADD_PROGRAM,
          payload: program,
        });
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        dispatch(setProgramError(error));
      }
    };
  };

  