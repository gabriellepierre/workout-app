import { ExerciseType } from "../../model/workout/ExerciseType";
import { GET_ALL_EXERCISES, SET_EXERCISES_LIST } from "../constants";

interface ExerciseState {
  exercise: ExerciseType,
  exerciseList: ExerciseType[],
}

const initialState = {
    exercise: {
      name: "",
      musclesEngaged: ""
    },
    exerciseList: [],
  };
  
const exerciseReducer = (state = initialState, action) => {
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
      default:
        return state;
    }
  };
  
  export default exerciseReducer
  