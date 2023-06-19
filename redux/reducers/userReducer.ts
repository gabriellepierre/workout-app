import { ADD_USER, SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER_PSEUDO } from "../constants";

const initialState = {
    email: '',
    password: '',
    pseudo: ''
  };
  
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_EMAIL:
        return {
          ...state,
          email: action.payload,
        };
      case SET_USER_PASSWORD:
        return {
          ...state,
          password: action.payload,
        };
    case SET_USER_PSEUDO:
        return {
          ...state,
          pseudo: action.payload,
        };
    case ADD_USER:
        return {
            ...state,
            email: action.payload.email,
            pseudo: action.payload.pseudo,
            password: action.payload.password,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  