import { GET_PROGRAM_BY_ID } from "../constants";

  const initialState = {
    program: {},
  };
  
const programReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PROGRAM_BY_ID:
        return {
        ...state,
        program: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default programReducer;
  