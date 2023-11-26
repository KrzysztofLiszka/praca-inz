import { createReducer, on } from "@ngrx/store"
import { VisualizationsState } from "./visualization.state"
import { VisualizationActions } from "."

export const initialState: VisualizationsState = {
    visualizationsFromWorkplace: [],
}

export const reducers = createReducer(
    initialState,
    on(VisualizationActions.getAllItemsFromWorkplace, (state) => ({
        ...state
    })),
    on(VisualizationActions.getAllItemsFromWorkplaceSuccess, (state, action) => ({
        ...state,
        visualizationsFromWorkplace: action.items
    }))
)
