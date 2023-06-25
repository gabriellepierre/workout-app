import { ExerciseType } from "../../model/workout/ExerciseType";
import { FETCH_ERROR_CALLBACK, FETCH_LOADING_CALLBACK, FETCH_SUCCESS_CALLBACK, GET_ALL_EXERCISES, SET_EXERCISES_LIST } from "../constants";

interface ExerciseState {
  exercise: ExerciseType,
  exerciseList: ExerciseType[],
  error: any;
  loading: boolean;
}

const initialState : ExerciseState = {
    exercise: {
      name: "",
      musclesEngaged: ""
    },
    exerciseList: [],
    error: null,
    loading: false,
  };
  
const exerciseReducer = (state = initialState, action) : ExerciseState => {
    switch (action.type) {
        case SET_EXERCISES_LIST:
        return {
          ...state,
          exerciseList: action.payload,
        };
      case GET_ALL_EXERCISES:
        return {
          ...state,
          exerciseList: action.payload,
        };
      case FETCH_ERROR_CALLBACK: 
        return {
          ...state,
          error: action.payload,
          loading: false,
        }
      case FETCH_LOADING_CALLBACK: 
        return {
          ...state,
          loading: true
        }
      case FETCH_SUCCESS_CALLBACK: 
        return {
          ...state,
          loading: false
        }
      default:
        return state;
    }
  };
  
  export default exerciseReducer
  