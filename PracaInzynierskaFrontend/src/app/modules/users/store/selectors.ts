import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectFeature = (state: AppState) => state.usersState;

export const getUsersSelector = createSelector(
    selectFeature,
    (state) => state.users
);
