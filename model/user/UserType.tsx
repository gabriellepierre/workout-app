import { BaseProperties } from "../BaseProperties";

export interface UserType extends BaseProperties {
    pseudo: string,
    email: string,
    password: string,
    program?: string,
}