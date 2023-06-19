import { ExerciseType } from '../../model/workout/ExerciseType';
import { WorkoutType } from '../../model/workout/WorkoutType';
import {SET_WORKOUT_NAME, SET_WORKOUT_AUTHOR, SET_WORKOUT_EXERCISES} from '../constants';

  export const setName = (name: string) => {
    return {
      type: SET_WORKOUT_NAME,
      payload: name,
    };
  };
  
  export const setAuthor = (author: string) => {
    return {
      type: SET_WORKOUT_AUTHOR,
      payload: author,
    };
  };

  export const setExercises = (exercises : ExerciseType[]) => {
    return {
      type: SET_WORKOUT_EXERCISES,
      payload: exercises,
    };
  };

  const url = process.env.API_URL + "/workouts";

  export const getAllWorkouts = () => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch(workoutJson);
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const getWorkoutByID = (id: string) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url + `/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch(workoutJson);
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const addWorkout = (workoutToAdd: WorkoutType) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutToAdd),
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch(setAuthor(workoutJson.author), setName(workoutJson.name), setExercises(workoutJson.exercises));
        return workoutPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const updateWorkout = (id: string, workoutToUpdate: WorkoutType) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url + `${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutToUpdate),
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch(setAuthor(workoutJson.author), setName(workoutJson.name), setExercises(workoutJson.exercises));
        return workoutPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

