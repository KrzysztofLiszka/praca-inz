import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { NotificationsService, VisualizationService } from "src/app/services";
import { VisualizationActions } from ".";

@Injectable()
export class VisualizationEffects {

    constructor(private actions$: Actions, private itemService: VisualizationService, private notificationsService: NotificationsService) { }

    getAllItemsFromWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VisualizationActions.getAllItemsFromWorkplace),
            mergeMap(() => {
                return this.itemService.getAllVisualizationsFromWorkplace().pipe(
                    map((items) => VisualizationActions.getAllItemsFromWorkplaceSuccess({ items: items })),
                    catchError((error) =>
                        of(VisualizationActions.getAllItemsFromWorkplaceFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VisualizationActions.getItem),
            mergeMap((action) =>
                this.itemService.getVisualization(action.id).pipe(
                    map((item) =>
                        VisualizationActions.getItemSuccess({ item })
                    ),
                    catchError((error) =>
                        of(VisualizationActions.getItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VisualizationActions.addItem),
            mergeMap((action) =>
                this.itemService.addVisualization(action.item).pipe(
                    map(() =>
                        VisualizationActions.addItemSuccess()
                    ),
                    catchError((error) =>
                        of(VisualizationActions.addItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    editItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VisualizationActions.editItem),
            mergeMap((action) =>
                this.itemService.editVisualization(action.editItem).pipe(
                    map(() =>
                        VisualizationActions.editItemSuccess()
                    ),
                    catchError((error) =>
                        of(VisualizationActions.editItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VisualizationActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteVisualization(action.id).pipe(
                    map(() =>
                        VisualizationActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(VisualizationActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                VisualizationActions.addItemSuccess,
                VisualizationActions.editItemSuccess,
                VisualizationActions.deleteItemSuccess
            ),
            map(() => VisualizationActions.getAllItemsFromWorkplace()),
            tap(() => this.notificationsService.showSuccessSnackbar())
        )
    );
}