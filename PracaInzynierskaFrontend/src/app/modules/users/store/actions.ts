import { createAction, props } from "@ngrx/store";
import { WorkerDto } from "src/app/models";

const prefix = "[Users]";

type ItemType = WorkerDto;

export const getAllItems = createAction(`${prefix} Get Items`);

export const getAllItemsSuccess = createAction(
    `${prefix} Get Items Success`,
    props<{ items: ItemType[] }>()
);

export const getAllItemsFailure = createAction(
    `${prefix} Get Items Failure`,
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