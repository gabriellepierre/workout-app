import { ADD_WORKOUT, SET_WORKOUT_NAME, SET_WORKOUT_AUTHOR, SET_WORKOUT_EXERCISES } from "../constants";

const initialState = {
    name: '',
    author: '',
    exercises: []
  };
  
export const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_WORKOUT_NAME:
        return {
          ...state,
          name: action.payload,
        };
      case SET_WORKOUT_AUTHOR:
        return {
          ...state,
          author: action.payload,
        };
    case SET_WORKOUT_EXERCISES:
        return {
          ...state,
          exercises: action.payload,
        };
    case ADD_WORKOUT:
        return {
            ...state,
            name: action.payload.name,
            author: action.payload.author,
            exercises: action.payload.exercises,
        };
      default:
        return state;
    }
  };
  
  export default workoutReducer;
  