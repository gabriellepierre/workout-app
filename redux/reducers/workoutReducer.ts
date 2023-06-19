import { GET_ALL_WORKOUT, GET_WORKOUT_BY_ID, ADD_WORKOUT, UPDATE_WORKOUT, DELETE_WORKOUT, SET_WORKOUT_NAME, SET_WORKOUT_AUTHOR, SET_WORKOUT_EXERCISES } from "../constants";

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
    case GET_ALL_WORKOUT:
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
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        author: action.payload.author,
        exercises: action.payload.exercises,
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        author: action.payload.author,
        exercises: action.payload.exercises,
      };
    case DELETE_WORKOUT:
      return {
        ...state,
      };
    default:
        return state;
  }
};
  
  export default workoutReducer;
  