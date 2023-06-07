export interface ProgramType {
    _id: string,
    name: string,
    objective: string, // Indexation
    level: string,
    seances : string[], // Référencement + One-to-Few
}