import { combineReducers } from 'redux';
import userReducer from './userReducer';
import exerciseReducer from './exerciseReducer';
import programReducer from './programReducer';
import workoutReducer from './workoutReducer';

const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
  workout: workoutReducer,
  program: programReducer,
});

export default rootReducer;