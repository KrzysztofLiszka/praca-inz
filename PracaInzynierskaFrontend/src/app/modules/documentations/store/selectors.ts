import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.documentationsState;

export const getDocumentationSelector = createSelector(
    selectFeature,
    (state) => state.documentation
);

export const getDocumentationsFromWorkplaceselector = createSelector(
    selectFeature,
    (state) => state.documentationsFromWorkplace
);
