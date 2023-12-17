import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.spentHoursState;

export const getTimeSpentsSelector = createSelector(
    selectFeature,
    (state) => state.timeSpent
);

export const getTimeSpentsFromUserSelector = createSelector(
    selectFeature,
    (state) => state.timeSpentsFromUser
);
