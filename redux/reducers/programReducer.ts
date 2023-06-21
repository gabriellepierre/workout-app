import { programs } from "../../data/ProgramData";
import { ProgramType } from "../../model/program/ProgramType";
import { GET_ALL_PROGRAMS, GET_PROGRAM_BY_ID, SET_ALL_PROGRAMS } from "../constants";

interface ProgramState {
  program: ProgramType;
  allPrograms: ProgramType[];
}
  const initialState: ProgramState = {
    program: {
      name:"",
      objective: "prise de masse",
      level: "débutant",
    },
    allPrograms: programs,
  };
  
const programReducer = (state = initialState, action): ProgramState => {
    switch (action.type) {
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
      // case GET_PROGRAM_BY_ID:
      //   return {
      //     ...state,
          
      //   }
      default:
        return state;
    }
  };
  
  export default programReducer;
  