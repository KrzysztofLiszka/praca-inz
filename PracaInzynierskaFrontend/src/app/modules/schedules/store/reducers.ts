import { createReducer, on } from "@ngrx/store"
import { SchedulesState } from "./schedule.state"
import { SchedulesActions } from "."

export const initialState: SchedulesState = {
    schedules: [],
    schedulesFromTimeline: []
}

export const reducers = createReducer(
    initialState,
    on(SchedulesActions.getItemsFromTimeline, (state) => ({
        ...state
    })),
    on(SchedulesActions.getItemsFromTimelineSuccess, (state, action) => ({
        ...state,
        schedulesFromTimeline: action.items
    })),
    on(SchedulesActions.getAllItemsFromWorkplace, (state) => ({
        ...state
    })),
    on(SchedulesActions.getAllItemsFromWorkplaceSuccess, (state, action) => ({
        ...state,
        schedules: action.items
    }))
)
