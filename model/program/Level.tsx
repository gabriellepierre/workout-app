export const PROGRAM_LEVEL = ["débutant", "intermédiaire", "avancé"] as const;

export type ProgramLevelType = typeof PROGRAM_LEVEL[number];