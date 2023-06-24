import { ExerciseType } from "../model/workout/ExerciseType";
import { SetType } from "../model/workout/SetType";
import { WorkoutType } from "../model/workout/WorkoutType";

const setsWorkout: SetType[] = [
    {setNumber: 1, reps: 10, weight: 20},
    {setNumber: 2, reps: 10, weight: 20},
    {setNumber: 3, reps: 10, weight: 20},

];

const exercicesWorkout: ExerciseType[] = [
    { _id:"234", name: "Développé couché", musclesEngaged: "Pectoraux", sets: setsWorkout },
    { _id:"2345674", name: "Squat", musclesEngaged: "Jambes", sets: setsWorkout },
    { _id:"20987634", name: "Hip trust", musclesEngaged: "Fessiers", sets: setsWorkout },
  ];

export const workouts: WorkoutType[] = [
    { _id: "11", author:"gabrielle", name:"leg day", exercises: exercicesWorkout },
    { _id: "21", author:"gabrielle", name:"glutes day", exercises: exercicesWorkout },
    { _id: "31", author:"gabrielle", name:"back day"},
    { _id: "51", author:"hectortest@gmail.com", name:"leg day", exercises: exercicesWorkout },
    { _id: "61", name:"jeudi" },
    { _id: "71", name:"test" },
    // // TODO Ajoutez les autres éléments de votre carrousel
  ];

  