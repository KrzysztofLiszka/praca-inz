import { createReducer, on } from "@ngrx/store"
import { SpentHourState } from "./spent-hour.state"
import { TimeSpentActions } from "."

export const initialState: SpentHourState = {
    timeSpentsFromUser: [],
    timeSpent: undefined
}

export const reducers = createReducer(
    initialState,
    on(TimeSpentActions.getItem, (state) => ({
        ...state
    })),
    on(TimeSpentActions.getItemSuccess, (state, action) => ({
        ...state,
        timeSpent: action.item
    })),
    on(TimeSpentActions.getAllItemsFromUser, (state) => ({
        ...state
    })),
    on(TimeSpentActions.getAllItemsFromUserSuccess, (state, action) => ({
        ...state,
        timeSpentsFromUser: action.items
    }))
)
