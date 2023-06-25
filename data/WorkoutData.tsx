import { ExerciseType } from "../model/workout/ExerciseType";
import { SetType } from "../model/workout/SetType";
import { WorkoutType } from "../model/workout/WorkoutType";

const setsWorkout: SetType[] = [
    {setNumber: 1, reps: 10, weight: 20},
    {setNumber: 2, reps: 10, weight: 20},
    {setNumber: 3, reps: 10, weight: 20},

];

const exercicesWorkout: ExerciseType[] = [
  { _id: "156789", image:"https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif", name: 'Développé couché', musclesEngaged: 'Pectoraux' },
  { _id: "23456789", image: "https://www.docteur-fitness.com/wp-content/uploads/2021/12/souleve-de-terre.gif", name: 'Soulevé de terre', musclesEngaged: 'Bas du corps' },
  { _id: "398665864658", image: "https://www.docteur-fitness.com/wp-content/uploads/2021/11/homme-faisant-un-squat-avec-barre.gif", name: 'Squat', musclesEngaged: 'Bas du corps' },
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

  