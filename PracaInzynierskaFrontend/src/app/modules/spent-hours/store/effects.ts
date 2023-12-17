import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { NotificationsService, TimeSpentService } from "src/app/services";
import { TimeSpentActions } from ".";

@Injectable()
export class TimeSpentEffects {

    constructor(private actions$: Actions, private itemService: TimeSpentService, private notificationsService: NotificationsService) { }

    getAllItemsFromUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimeSpentActions.getAllItemsFromUser),
            mergeMap(() => {
                return this.itemService.getAllTimeSpentsFromUser().pipe(
                    map((items) => TimeSpentActions.getAllItemsFromUserSuccess({ items: items })),
                    catchError((error) =>
                        of(TimeSpentActions.getAllItemsFromUserFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimeSpentActions.getItem),
            mergeMap((action) =>
                this.itemService.getTimeSpent(action.id).pipe(
                    map((item) =>
                        TimeSpentActions.getItemSuccess({ item })
                    ),
                    catchError((error) =>
                        of(TimeSpentActions.getItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimeSpentActions.addItem),
            mergeMap((action) =>
                this.itemService.addTimeSpent(action.item).pipe(
                    map(() =>
                        TimeSpentActions.addItemSuccess()
                    ),
                    catchError((error) =>
                        of(TimeSpentActions.addItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    editItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimeSpentActions.editItem),
            mergeMap((action) =>
                this.itemService.editTimeSpent(action.editItem).pipe(
                    map(() =>
                        TimeSpentActions.editItemSuccess()
                    ),
                    catchError((error) =>
                        of(TimeSpentActions.editItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimeSpentActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteTimeSpent(action.id).pipe(
                    map(() =>
                        TimeSpentActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(TimeSpentActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                TimeSpentActions.addItemSuccess,
                TimeSpentActions.editItemSuccess,
                TimeSpentActions.deleteItemSuccess
            ),
            map(() => TimeSpentActions.getAllItemsFromUser()),
            tap(() => this.notificationsService.showSuccessSnackbar())
        )
    );
}