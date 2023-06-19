import { combineReducers } from 'redux';
import userReducer from './userReducer';
import exerciseReducer from './exerciseReducer';
import programReducer from './programReducer';

const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
  program: programReducer,
  // workout: workoutReducer,
});

export default rootReducer;