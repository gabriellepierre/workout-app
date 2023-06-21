import { UserType } from "../../model/user/UserType";
import { CLEAR_ALL_STORAGE, GET_CONNECTED_USER, REMOVE_CONNECTED_USER, STORE_CONNECTED_USER, USER_ERROR } from "../constants";

interface StorageState {
  user: UserType | null,
  error: any;
}

const initialState: StorageState = {
  user: null,
  error: null
};
  
export const storageReducer = (state = initialState, action) : StorageState => {
    switch (action.type) {
        // ERROR CASE
        case USER_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        // ASYNC STORAGE CASES
        case STORE_CONNECTED_USER: 
            return {
                ...state,
                user: action.payload,
            };
        case GET_CONNECTED_USER: 
            return {
                ...state,
                user: action.payload,
            };
        case REMOVE_CONNECTED_USER: 
            return {
                ...state,
                user: null,
            };
        case CLEAR_ALL_STORAGE: 
            return initialState;
      default:
        return state;
      }
  };
  
  export default storageReducer;
  