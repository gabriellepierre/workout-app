
import { programs } from "../../data/ProgramData";
import { ProgramType } from "../../model/program/ProgramType";
import { ADD_PROGRAM, GET_ALL_PROGRAMS, GET_PROGRAM_BY_ID, SET_ALL_PROGRAMS, SET_PROGRAM_ERROR } from "../constants";
import uuid from 'react-native-uuid';

interface ProgramState {
  program: ProgramType;
  allPrograms: ProgramType[];
  error: any;
}
  const initialState: ProgramState = {
    program: {
      name:"",
      objective: "prise de masse",
      level: "débutant",
    },
    allPrograms: programs,
    error: null,
  };
  
const programReducer = (state = initialState, action): ProgramState => {
  switch (action.type) {
    case ADD_PROGRAM: 
      const newProgram: ProgramType = {
        ...action.payload,
        _id: uuid.v4(),
      };
      return {
        ...state,
        allPrograms: [...state.allPrograms, newProgram],
      };
    case SET_ALL_PROGRAMS:
      return {
        ...state,
        allPrograms: action.payload,
        };
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        allPrograms: action.payload,
        };
    case GET_PROGRAM_BY_ID:
      return {
        ...state,
        program: action.payload,
      }
    case SET_PROGRAM_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
  
  export default programReducer;
  