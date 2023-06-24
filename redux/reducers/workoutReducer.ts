import { workouts } from "../../data/WorkoutData";
import { WorkoutType } from "../../model/workout/WorkoutType";
import { GET_ALL_WORKOUTS, GET_WORKOUT_BY_ID, ADD_WORKOUT, UPDATE_WORKOUT, DELETE_WORKOUT, SET_WORKOUT_EXERCISES, SET_WORKOUT_ERROR } from "../constants";
import uuid from 'react-native-uuid';

interface WorkoutState {
  workout: WorkoutType;
  workoutList: WorkoutType[];
  error: any;
}
const initialState: WorkoutState = {
    workout: {
      name: "",
    },
    workoutList: workouts,
    error: null,
  };
  
export const workoutReducer = (state = initialState, action): WorkoutState => {
  switch (action.type) {
    case UPDATE_WORKOUT: {
      const { workoutId, newProperty } = action.payload;
      return {
        ...state,
        workoutList: state.workoutList.map((workout) =>
          workout._id === workoutId ? { ...workout, ...newProperty } : workout
        ),
      };
    }
    // case SET_WORKOUT_EXERCISES: {
    //   const { workoutId, newProperty } = action.payload;
    //   return {
    //     ...state,
    //     workoutList: state.workoutList.map((workout) =>
    //       workout._id === workoutId ? { ...workout, exercises: {...workout.exercises, newProperty} } : workout
    //     ),
    //   };
    // }
    case GET_ALL_WORKOUTS:
      return {
        ...state,
        workoutList: action.payload,
      };
    case GET_WORKOUT_BY_ID:
      return {
        ...state,
        workout: action.payload,
      };
    case ADD_WORKOUT:
      const newWorkout: WorkoutType = {
        ...action.payload,
        _id: uuid.v4(),
        createdAt: new Date().getTime(),
      };
      return {
        ...state,
        workoutList: [...state.workoutList, newWorkout],
      };

    case DELETE_WORKOUT:
      return {
        ...state,
      };
    case SET_WORKOUT_ERROR : 
      return {
        ...state,
        error: action.payload
      }
    default:
        return state;
  }
};
  
  export default workoutReducer;
  