import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.assignmentsState;

export const getAssignmentSelector = createSelector(
    selectFeature,
    (state) => state.assignment
);

export const getAssignmentsFromWorkplaceselector = createSelector(
    selectFeature,
    (state) => state.assignmentsFromWorkplace
);
