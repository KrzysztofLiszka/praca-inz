import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.visualizationsState;

export const getVisualizationsFromWorkplaceSelector = createSelector(
    selectFeature,
    (state) => state.visualizationsFromWorkplace
);
