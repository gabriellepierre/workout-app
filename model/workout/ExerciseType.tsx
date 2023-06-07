import { SetType } from "./SetType";

export interface ExerciseType {
    _id: string,
    name: string,
    musclesEngaged: string[],
    sets: SetType[]
}