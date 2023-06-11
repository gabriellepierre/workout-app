import { BaseProperties } from "../BaseProperties";
import { ProgramLevelType } from "./Level";
import { ProgramObjectiveType } from "./Objective";

export interface ProgramType extends BaseProperties {
    name: string,
    objective: ProgramObjectiveType, // Indexation
    level: ProgramLevelType, // Indexation
    seances?: string[], // Référencement + One-to-Few
}