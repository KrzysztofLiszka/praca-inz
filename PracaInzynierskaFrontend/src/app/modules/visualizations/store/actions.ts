import { createAction, props } from "@ngrx/store";
import { Visualization } from "src/app/models";

const prefix = "[Visualizations]";

type ItemType = Visualization;

export const getAllItemsFromWorkplace = createAction(`${prefix} Get Items`);

export const getAllItemsFromWorkplaceSuccess = createAction(
    `${prefix} Get Items Success`,
    props<{ items: ItemType[] }>()
);

export const getAllItemsFromWorkplaceFailure = createAction(
    `${prefix} Get Items Failure`,
    props<{ error: string }>()
);

export const getItem = createAction(
    `${prefix} Get Item By Id`,
    props<{ id: string }>()
);

export const getItemSuccess = createAction(
    `${prefix} Get Item By Id Success`,
    props<{ item: ItemType }>()
);

export const getItemFailure = createAction(
    `${prefix} Get Item By Id Failure`,
    props<{ error: string }>()
);

export const getItemsFromTimeline = createAction(
    `${prefix} Get Items From Timeline`,
    props<{ from?: Date, to?: Date }>()
);

export const getItemsFromTimelineSuccess = createAction(
    `${prefix} Get Items From Timeline Success`,
    props<{ items: ItemType[] }>()
);

export const getItemsFromTimelineFailure = createAction(
    `${prefix} Get Items From Timeline Failure`,
    props<{ error: string }>()
);

export const addItem = createAction(
    `${prefix} Add Item`,
    props<{ item: ItemType }>()
);

export const addItemSuccess = createAction(
    `${prefix} Add Item Success`
);

export const addItemFailure = createAction(
    `${prefix} Add Item Failure`,
    props<{ error: string }>()
);

export const editItem = createAction(
    `${prefix} Edit Item`,
    props<{ editItem: ItemType }>()
);

export const editItemSuccess = createAction(
    `${prefix} Edit Item Success`
);

export const editItemFailure = createAction(
    `${prefix} Edit Item Failure`,
    props<{ error: string }>()
);

export const deleteItem = createAction(
    `${prefix} Delete Item`,
    props<{ id: string }>()
);

export const deleteItemSuccess = createAction(
    `${prefix} Delete Item Success`
);

export const deleteItemFailure = createAction(
    `${prefix} Delete Item Failure`,
    props<{ error: string }>()
);