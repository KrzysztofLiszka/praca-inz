import { createReducer, on } from "@ngrx/store"
import { AssignmentState } from "./assignment.state"
import { AssignmentsActions } from "."

export const initialState: AssignmentState = {
    assignment: undefined,
    assignmentsFromWorkplace: []
}

export const reducers = createReducer(
    initialState,
    on(AssignmentsActions.getItem, (state) => ({
        ...state
    })),
    on(AssignmentsActions.getItemSuccess, (state, action) => ({
        ...state,
        assignment: action.item
    })),
    on(AssignmentsActions.getAllItemsFromWorkplace, (state) => ({
        ...state
    })),
    on(AssignmentsActions.getAllItemsFromWorkplaceSuccess, (state, action) => ({
        ...state,
        assignmentsFromWorkplace: action.items
    }))
)
