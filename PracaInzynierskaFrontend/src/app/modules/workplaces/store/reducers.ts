import { createReducer, on } from "@ngrx/store"
import { WorkplaceActions, WorkplacesState } from "."

export const initialState: WorkplacesState = {
    workplaces: [],
    workersFromWorkplace: [],
    workplace: undefined,
    payments: []
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
    })),
    on(WorkplaceActions.getItem, (state) => ({
        ...state
    })),
    on(WorkplaceActions.getItemSuccess, (state, action) => ({
        ...state,
        workplace: action.item
    })),
    on(WorkplaceActions.getAllPayments, (state) => ({
        ...state
    })),
    on(WorkplaceActions.getAllPaymentsSuccess, (state, action) => ({
        ...state,
        payments: action.items
    })),
)