import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { catchError, map, mergeMap, of } from "rxjs";
import { ScheduleService } from "src/app/services/schedule.service";
import { SchedulesActions } from ".";

@Injectable()
export class ScheduleEffects {

    constructor(private actions$: Actions, private itemService: ScheduleService, private store: Store<AppState>) { }

    getAllItemsFromWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.getAllItemsFromWorkplace),
            mergeMap(() => {
                return this.itemService.getAllSchedulensFromWorkplace().pipe(
                    map((items) => SchedulesActions.getAllItemsFromWorkplaceSuccess({ items: items })),
                    catchError((error) =>
                        of(SchedulesActions.getAllItemsFromWorkplaceFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItemsFromTimeline$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.getItemsFromTimeline),
            mergeMap((action) => {
                return this.itemService.getSchedulesFromTimeline(action.from, action.to).pipe(
                    map((items) => SchedulesActions.getItemsFromTimelineSuccess({ items: items })),
                    catchError((error) =>
                        of(SchedulesActions.getItemsFromTimelineFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.getItem),
            mergeMap((action) =>
                this.itemService.getSchedule(action.id).pipe(
                    map((item) =>
                        SchedulesActions.getItemSuccess({ item })
                    ),
                    catchError((error) =>
                        of(SchedulesActions.getItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.addItem),
            mergeMap((action) =>
                this.itemService.addSchedule(action.item).pipe(
                    map(() =>
                        SchedulesActions.addItemSuccess()
                    ),
                    catchError((error) =>
                        of(SchedulesActions.addItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    editItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.editItem),
            mergeMap((action) =>
                this.itemService.editSchedule(action.editItem).pipe(
                    map(() =>
                        SchedulesActions.editItemSuccess()
                    ),
                    catchError((error) =>
                        of(SchedulesActions.editItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SchedulesActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteSchedule(action.id).pipe(
                    map(() =>
                        SchedulesActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(SchedulesActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                SchedulesActions.addItemSuccess,
                SchedulesActions.editItemSuccess,
                SchedulesActions.deleteItemSuccess,
            ),
            map(() => SchedulesActions.getItemsFromTimeline({}))
        )
    );
}