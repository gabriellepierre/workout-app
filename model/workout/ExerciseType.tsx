import { BaseProperties } from "../BaseProperties";
import { SetType } from "./SetType";

export interface ExerciseType extends BaseProperties {
    name: string,
    musclesEngaged: string,
    image?: string,
    sets?: SetType[]
}