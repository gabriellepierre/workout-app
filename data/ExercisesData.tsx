import { ExerciseType } from "../model/workout/ExerciseType";

export const exercises: ExerciseType[] = [
    { _id: "1", image:"https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif", name: 'Développé couché', musclesEngaged: 'Pectoraux' },
    { _id: "2", image: "https://www.docteur-fitness.com/wp-content/uploads/2021/12/souleve-de-terre.gif", name: 'Soulevé de terre', musclesEngaged: 'Bas du corps' },
    { _id: "3", image: "https://www.docteur-fitness.com/wp-content/uploads/2021/11/homme-faisant-un-squat-avec-barre.gif", name: 'Squat', musclesEngaged: 'Bas du corps' },
    { _id: "4", image: "https://www.docteur-fitness.com/wp-content/uploads/2021/12/hips-thrust.gif", name: 'Hip trust', musclesEngaged: 'Fessiers' },
    { _id: "5", image:"https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-musculation.gif", name: 'Pompe', musclesEngaged: 'Pectoraux' },
    // // TODO Ajoutez les autres éléments de votre carrousel
  ];