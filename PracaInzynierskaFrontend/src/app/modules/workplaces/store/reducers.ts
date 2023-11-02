import { createReducer, on } from "@ngrx/store"
import { WorkplaceActions, WorkplacesState } from "."

export const initialState: WorkplacesState = {
    workplaces: []
}

export const reducers = createReducer(
    initialState,
    on(WorkplaceActions.getAllItems, (state) => ({
        ...state
    })),
    on(WorkplaceActions.getAllItemsSuccess, (state, action) => ({
        ...state,
        workplaces: action.items
    }))
)