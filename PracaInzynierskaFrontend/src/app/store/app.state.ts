import { AssignmentState } from "../modules/assignments/store";
import { DocumentationState } from "../modules/documentations/store";
import { WorkplacesState } from "../modules/workplaces/store";

export interface AppState {
    workplacesState: WorkplacesState,
    assignmentsState: AssignmentState,
    documentationsState: DocumentationState
}