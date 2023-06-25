
import { exercises } from "../../data/ExercisesData";
import { ExerciseType } from "../../model/workout/ExerciseType";
import { FETCH_ERROR_CALLBACK, FETCH_SUCCESS_CALLBACK, SET_EXERCISES_LIST } from "../constants";


export const setExercisesList = (exercisesList: ExerciseType[]) => {
    return {
      type: SET_EXERCISES_LIST,
      payload: exercisesList,
    };
  }

  export const fetchErrorCallback = (error: any) => {
    return {
      type: FETCH_ERROR_CALLBACK,
      payload: error,
    };
  }

  export const fetchSuccessCallback = (exercisesList: ExerciseType[]) => {
    return {
      type: FETCH_SUCCESS_CALLBACK,
      payload: exercisesList,
    };
  }

  const fetchData = () => {   
    fetch('https://example-data.draftbit.com/books?_limit=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // Handle success callback
        fetchSuccessCallback(data);
      })
      .catch((error) => {
        // NOTATION : Handle fetch error callback
        fetchErrorCallback(error)
      });
  };
  
  
export const getAllExercises = () => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {

        dispatch(setExercisesList(exercises));
      } catch (error) {
        console.log('Error with exercise API ---------', error);
        // NOTATION : Handle fetch error callback
        dispatch(fetchErrorCallback(error))
      }
    }
  }