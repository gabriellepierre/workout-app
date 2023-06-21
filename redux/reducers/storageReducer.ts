import { UserType } from "../../model/user/UserType";
import { STORE_CONNECTED_USER, USER_ERROR } from "../constants";

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
      default:
        return state;
      }
  };
  
  export default storageReducer;
  