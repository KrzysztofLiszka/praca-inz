import { createReducer, on } from "@ngrx/store"
import { UsersState } from "./user.state"
import { UsersActions } from "."

export const initialState: UsersState = {
    users: [],
}

export const reducers = createReducer(
    initialState,
    on(UsersActions.getAllItems, (state) => ({
        ...state
    })),
    on(UsersActions.getAllItemsSuccess, (state, action) => ({
        ...state,
        users: action.items
    })),
)