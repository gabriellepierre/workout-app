
import { exercises } from "../../data/ExercisesData";
import { ExerciseType } from "../../model/workout/ExerciseType";
import { SET_EXERCISES_LIST } from "../constants";


export const setExercisesList = (exercisesList: ExerciseType[]) => {
    return {
      type: SET_EXERCISES_LIST,
      payload: exercisesList,
    };
  }
  
export const getAllExercises = () => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        dispatch(setExercisesList(exercises));
      } catch (error) {
        console.log('Error with exercise API ---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }