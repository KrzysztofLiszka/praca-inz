import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.workplacesState;

export const getWorkplacesSelector = createSelector(
    selectFeature,
    (state) => state.workplaces
);

export const getWorkersFromWorkplaceselector = createSelector(
    selectFeature,
    (state) => state.workersFromWorkplace
);

export const getWorkplaceSelector = createSelector(
    selectFeature,
    (state) => state.workplace
);

export const getPaymentsSelector = createSelector(
    selectFeature,
    (state) => state.payments
);