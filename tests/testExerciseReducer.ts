import {exercises} from '../data/ExercisesData';
import exerciseReducer from "../redux/reducers/exerciseReducer";

// Mock values used in tests
const initialState = {
  exercise: exercises[0],
  exerciseList: exercises //Here you defined a static list loaded in the initial state. In your real store, this list is usually empty.
}

// Reducer for tests => Just call the "true" reducer with our mocked data as initial state
// @ts-ignore
export default testExerciseReducer = (state = initialState, action) => {
  return exerciseReducer(initialState, action);
}