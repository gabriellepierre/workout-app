import { BaseProperties } from "../BaseProperties";
import { ExerciseType } from "./ExerciseType";

export interface WorkoutType extends BaseProperties
{
    author?: string,  // Référencement INVERSE + One-to-Zillions : Id de l'utilisateur qui a créé son template de séance
    name: string,
    exercises?: ExerciseType[], // Incorporation
}
