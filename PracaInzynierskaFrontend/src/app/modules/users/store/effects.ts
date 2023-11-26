import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { NotificationsService, UsersService } from "src/app/services";
import { UsersActions } from ".";

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private itemService: UsersService, private notificationsService: NotificationsService) { }

    getAllItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.getAllItems),
            mergeMap(() => {
                return this.itemService.getAllUsers().pipe(
                    map((items) => UsersActions.getAllItemsSuccess({ items: items })),
                    catchError((error) =>
                        of(UsersActions.getAllItemsFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteUser(action.id).pipe(
                    map(() =>
                        UsersActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(UsersActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                UsersActions.deleteItemSuccess,
            ),
            map(() => UsersActions.getAllItems()),
            tap(() => this.notificationsService.showSuccessSnackbar())
        )
    );
}