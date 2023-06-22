import { workouts } from '../../data/WorkoutData';
import { ExerciseType } from '../../model/workout/ExerciseType';
import { WorkoutType } from '../../model/workout/WorkoutType';
import { ADD_WORKOUT, DELETE_WORKOUT, GET_ALL_WORKOUTS, SET_WORKOUT_ERROR, UPDATE_WORKOUT } from '../constants';

export const setWorkoutError = (error: any) => {
  return {
    type: SET_WORKOUT_ERROR,
    payload: error,
  };
}

export const getAllWorkouts = () => {
  //In order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      dispatch({
        type: GET_ALL_WORKOUTS,
        payload: workouts
      });
      
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}

export const addWorkout = (workout: WorkoutType) => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_WORKOUT,
        payload: workout,
      });
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      dispatch(setWorkoutError(error));
    }
  };
};

export const updateWorkout = (workoutId, newProperty) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_WORKOUT,
        payload: {
          workoutId,
          newProperty,
        }
      });
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      dispatch(setWorkoutError(error));
    }
  };
};




















// #region ACTIONS WITH API

const url = process.env.API_URL + "/workouts";

export const getAllWorkoutsAPI = () => {
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

  export const getWorkoutByIDAPI = (id: string) => {
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

  export const addWorkoutAPI = (workoutToAdd: WorkoutType) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutToAdd),
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch({
          type: ADD_WORKOUT,
          payload: workoutJson
        });
        return workoutPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const updateWorkoutAPI = (id: string, workoutToUpdate: WorkoutType) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url + `${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutToUpdate),
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch({
          type: UPDATE_WORKOUT,
          payload: workoutJson
        });
        return workoutPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }

  export const deleteWorkoutAPI = (id: string) => {
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
      //Then perform your asynchronous operations.
      try {
        const workoutPromise = await fetch(url + `${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        //Then use the json method to get json data from api/
        const workoutJson = await workoutPromise.json();
        dispatch({
          type: DELETE_WORKOUT,
          payload: workoutJson
        });
        return workoutPromise.json(); // parses JSON response into native JavaScript objects
      } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
      }
    }
  }


  // #endregion ACTIONS WITH API