import { createReducer, on } from "@ngrx/store"
import { DocumentationState } from "./documentation.state"
import { DocumentationsActions } from "."

export const initialState: DocumentationState = {
    documentation: undefined,
    documentationsFromWorkplace: []
}

export const reducers = createReducer(
    initialState,
    on(DocumentationsActions.getItem, (state) => ({
        ...state
    })),
    on(DocumentationsActions.getItemSuccess, (state, action) => ({
        ...state,
        documentation: action.item
    })),
    on(DocumentationsActions.getAllItemsFromWorkplace, (state) => ({
        ...state
    })),
    on(DocumentationsActions.getAllItemsFromWorkplaceSuccess, (state, action) => ({
        ...state,
        documentationsFromWorkplace: action.items
    }))
)
