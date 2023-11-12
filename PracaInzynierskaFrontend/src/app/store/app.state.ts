import { AssignmentState } from "../modules/assignments/store";
import { DocumentationState } from "../modules/documentations/store";
import { SchedulesState } from "../modules/schedules/store/schedule.state";
import { WorkplacesState } from "../modules/workplaces/store";

export interface AppState {
    workplacesState: WorkplacesState,
    assignmentsState: AssignmentState,
    documentationsState: DocumentationState,
    schedulesState: SchedulesState
}