import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../../model/user/UserType';
import { WorkoutType } from '../../model/workout/WorkoutType';

 
// NOTATION : Store favorite data into phone storage
 // #region ASYNC STORAGE : User
 export const storeConnectedUser = async (user: UserType) => {
        try {
          const jsonUser = JSON.stringify(user)
          await AsyncStorage.setItem('connected_user', jsonUser);
        } catch (e) {
            console.log("An error occurred", e);
        }
  }

  export const getConnectedUser = async () => {
        try {
            const jsonUser = await AsyncStorage.getItem('connected_user');
            return jsonUser !== null ? JSON.parse(jsonUser) : null;
        } catch(e) {
            console.log("An error occurred", e);
        }
    }

  export const removeConnectedUser = async () => {
        try {
            await AsyncStorage.removeItem('connected_user')
        } catch(e) {
            console.log("An error occurred", e);
        }
  }


// #endregion ASYNC STORAGE : User

// #region ASYNC STORAGE : Workout
export const storeWorkout = async (workout: WorkoutType) => {
  try {
    const jsonWorkout = JSON.stringify(workout)
    await AsyncStorage.setItem('workout', jsonWorkout);
  } catch (e) {
      console.log("An error occurred", e);
  }
}

export const getWorkout = async () => {
  try {
      const jsonWorkout = await AsyncStorage.getItem('workout');
      return jsonWorkout !== null ? JSON.parse(jsonWorkout) : null;
  } catch(e) {
      console.log("An error occurred", e);
  }
}

export const removeWorkout = async () => {
  try {
      await AsyncStorage.removeItem('workout')
  } catch(e) {
      console.log("An error occurred", e);
  }
}

// #endregion ASYNC STORAGE : Workout
  

export const clearAllStorage = async () => {
  try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log("An error occurred", e);
    }

}