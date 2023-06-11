export const PROGRAM_OBJECTIVE = ["perte de poids", "maintien de la forme", "prise de masse", "amélioration du cardio"] as const;

export type ProgramObjectiveType = typeof PROGRAM_OBJECTIVE[number];