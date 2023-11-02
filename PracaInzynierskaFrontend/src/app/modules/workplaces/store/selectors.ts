import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.workplacesState;

export const getWorkplacesSelector = createSelector(
    selectFeature,
    (state) => state.workplaces
);