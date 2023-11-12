import { Documentation } from "src/app/models";

export interface DocumentationState {
    documentationsFromWorkplace: Documentation[],
    documentation?: Documentation
}
