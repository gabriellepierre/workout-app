
import { ExerciseType } from "../../model/workout/ExerciseType";
import { SET_EXERCISES_LIST } from "../constants";


export const setExercisesList = (exercisesList: ExerciseType[]) => {
    return {
      type: SET_EXERCISES_LIST,
      payload: exercisesList,
    };
  }
  
    const url = 'https://musclewiki.com/api/';
    const options = {
        method: 'GET',
    };
export const getAllExercises = () => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        //Have it first fetch data from our starwars url.
        const exercisesPromise = await fetch(url, options);
        //Then use the json method to get json data from api/
        const exercisesListJson = await exercisesPromise.json();
        console.log(exercisesListJson);

        // const exercisesList = exercisesListJson.filter(exo => {exo.name, exo.muscle}
        // );

        dispatch(setExercisesList(exercisesListJson));
      } catch (error) {
        console.log('Error with exercise API ---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }