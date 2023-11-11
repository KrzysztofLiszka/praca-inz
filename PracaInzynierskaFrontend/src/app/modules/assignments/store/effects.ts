import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AssignmentService } from "src/app/services";
import { AppState } from "src/app/store/app.state";
import { AssignmentsActions } from ".";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class AssignmentEffects {

    constructor(private actions$: Actions, private itemService: AssignmentService, private store: Store<AppState>) { }

    getAllItemsFromWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssignmentsActions.getAllItemsFromWorkplace),
            mergeMap(() => {
                return this.itemService.getAllAssignmentsFromWorkplace().pipe(
                    map((items) => AssignmentsActions.getAllItemsFromWorkplaceSuccess({ items: items })),
                    catchError((error) =>
                        of(AssignmentsActions.getAllItemsFromWorkplaceFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssignmentsActions.getItem),
            mergeMap((action) =>
                this.itemService.getAssignment(action.id).pipe(
                    map((item) =>
                        AssignmentsActions.getItemSuccess({ item })
                    ),
                    catchError((error) =>
                        of(AssignmentsActions.getItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssignmentsActions.addItem),
            mergeMap((action) =>
                this.itemService.addAssignment(action.item).pipe(
                    map(() =>
                        AssignmentsActions.addItemSuccess()
                    ),
                    catchError((error) =>
                        of(AssignmentsActions.addItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    editItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssignmentsActions.editItem),
            mergeMap((action) =>
                this.itemService.editAssignment(action.editItem).pipe(
                    map(() =>
                        AssignmentsActions.editItemSuccess()
                    ),
                    catchError((error) =>
                        of(AssignmentsActions.editItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssignmentsActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteAssignment(action.id).pipe(
                    map(() =>
                        AssignmentsActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(AssignmentsActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                AssignmentsActions.addItemSuccess,
                AssignmentsActions.editItemSuccess,
                AssignmentsActions.deleteItemSuccess
            ),
            map(() => AssignmentsActions.getAllItemsFromWorkplace())
        )
    );
}