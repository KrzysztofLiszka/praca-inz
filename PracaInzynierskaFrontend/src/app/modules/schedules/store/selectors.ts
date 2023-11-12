import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.schedulesState;

export const getSchedulesFromTimelineSelector = createSelector(
    selectFeature,
    (state) => state.schedulesFromTimeline
);

export const getSchedulesFromWorkplaceselector = createSelector(
    selectFeature,
    (state) => state.schedules
);
