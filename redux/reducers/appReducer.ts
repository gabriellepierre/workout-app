import { combineReducers } from 'redux';
import userReducer from './userReducer';
import exerciseReducer from './exerciseReducer';
import programReducer from './programReducer';
import storageReducer from './storageReducer';
import workoutReducer from './workoutReducer';

const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
  workout: workoutReducer,
  program: programReducer,
  storage: storageReducer,
});

export default rootReducer;