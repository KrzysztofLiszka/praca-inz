import { Assignment } from "src/app/models";

export interface AssignmentState {
    assignmentsFromWorkplace: Assignment[],
    assignment?: Assignment
}
