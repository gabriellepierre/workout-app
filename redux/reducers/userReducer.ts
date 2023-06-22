import { users } from "../../data/UserData";
import { UserType } from "../../model/user/UserType";
import { ADD_USER, GET_USERS, UPDATE_USER, USER_ERROR } from "../constants";
import uuid from 'react-native-uuid';

interface UserState {
  user: UserType,
  usersList: UserType[];
  error: any;
}

const initialState: UserState = {
  user: {
    email: '',
    password: '',
    pseudo: '',
  },
  usersList: users,
  error: null
};
  
export const userReducer = (state = initialState, action) : UserState => {
    switch (action.type) {
      case GET_USERS: 
        return {
          ...state,
          usersList: action.payload,
        };
      case ADD_USER:
        const newUser: UserType = {
          ...action.payload,
          _id: uuid.v4(),
        };
        return {
          ...state,
          usersList: [...state.usersList, newUser],
        };
      case UPDATE_USER: {
        const { userId, newProperty } = action.payload;
        return {
          ...state,
          usersList: state.usersList.map((user) =>
          user._id === userId ? { ...user, ...newProperty } : user
          ),
        };
      }
        // ERROR CASE
      case USER_ERROR: 
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
      }
  };
  
  export default userReducer;
  