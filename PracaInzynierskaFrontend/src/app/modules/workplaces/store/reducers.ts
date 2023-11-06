import { createReducer, on } from "@ngrx/store"
import { WorkplaceActions, WorkplacesState } from "."

export const initialState: WorkplacesState = {
    workplaces: [],
    workersFromWorkplace: []
}

export const reducers = createReducer(
    initialState,
    on(WorkplaceActions.getAllItems, (state) => ({
        ...state
    })),
    on(WorkplaceActions.getAllItemsSuccess, (state, action) => ({
        ...state,
        workplaces: action.items
    })),
    on(WorkplaceActions.getAllWorkersFromWorkplace, (state) => ({
        ...state
    })),
    on(WorkplaceActions.getAllWorkersFromWorkplaceSuccess, (state, action) => ({
        ...state,
        workersFromWorkplace: action.workersFromWorkplace
    }))
)