import { createAction, props } from "@ngrx/store";
import { WorkerDto, Workplace } from "src/app/models";

const prefix = "[Workplaces]";

type ItemType = Workplace;

export const getAllItems = createAction(`${prefix} Get Items`);

export const getAllItemsSuccess = createAction(
    `${prefix} Get Items Success`,
    props<{ items: ItemType[] }>()
);

export const getAllItemsFailure = createAction(
    `${prefix} Get Items Failure`,
    props<{ error: string }>()
);

export const joinWorkplace = createAction(
    `${prefix} Join Workplace`,
    props<{ workplace: ItemType }>()
);

export const joinWorkplaceSuccess = createAction(
    `${prefix} Join Workplace Success`,
);

export const joinWorkplaceFailure = createAction(
    `${prefix} Join Workplace Failure`,
    props<{ error: string }>()
);

export const updateUserInfo = createAction(
    `${prefix} Update User Info`,
    props<{ workplaceId: string }>()
);

export const getAllWorkersFromWorkplace = createAction(`${prefix} Get All Workers From Workplace`);

export const getAllWorkersFromWorkplaceSuccess = createAction(
    `${prefix} Get All Workers From Workplace Success`,
    props<{ workersFromWorkplace: WorkerDto[] }>()
);

export const getAllWorkersFromWorkplaceFailure = createAction(
    `${prefix} Get All Workers From Workplace Failure`,
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

export const deleteWorkerFromWorkplace = createAction(
    `${prefix} Delete Worker From Workplace`,
    props<{ id: string }>()
);

export const deleteWorkerFromWorkplaceSuccess = createAction(
    `${prefix} Delete Worker From Workplace Success`
);

export const deleteWorkerFromWorkplaceFailure = createAction(
    `${prefix} Delete Worker From Workplace Failure`,
    props<{ error: string }>()
);

export const getAllPayments = createAction(
    `${prefix} Get All Payments`,
    props<{ from?: Date, to?: Date }>()
);

export const getAllPaymentsSuccess = createAction(
    `${prefix} Get All Payments Success`,
    props<{ items: any[] }>()
);

export const getAllPaymentsFailure = createAction(
    `${prefix} Get All Payments Failure`,
    props<{ error: string }>()
);