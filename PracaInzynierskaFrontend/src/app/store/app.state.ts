import { AssignmentState } from "../modules/assignments/store";
import { DocumentationState } from "../modules/documentations/store";
import { SchedulesState } from "../modules/schedules/store";
import { UsersState } from "../modules/users/store/user.state";
import { VisualizationsState } from "../modules/visualizations/store";
import { WorkplacesState } from "../modules/workplaces/store";

export interface AppState {
    workplacesState: WorkplacesState,
    assignmentsState: AssignmentState,
    documentationsState: DocumentationState,
    schedulesState: SchedulesState,
    visualizationsState: VisualizationsState,
    usersState: UsersState
}