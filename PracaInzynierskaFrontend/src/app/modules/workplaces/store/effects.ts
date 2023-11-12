import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { WorkplaceService } from "src/app/services";
import { AppState } from "src/app/store/app.state";
import { WorkplaceActions } from ".";
import { Router } from "@angular/router";
import { WorkerDto } from "src/app/models";


@Injectable()
export class WorkplaceEffects {

    private updateCurrentUserWorkplace(workplaceId: string): void {
        var currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}') as WorkerDto;
        currentUser.workplaceId = workplaceId;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };

    constructor(private actions$: Actions, private itemService: WorkplaceService, private store: Store<AppState>, private router: Router) { }

    getAllItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WorkplaceActions.getAllItems),
            mergeMap(() => {
                return this.itemService.getAllWorkplaces().pipe(
                    map((items) => WorkplaceActions.getAllItemsSuccess({ items: items })),
                    catchError((error) =>
                        of(WorkplaceActions.getAllItemsFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getWorkersFromWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WorkplaceActions.getAllWorkersFromWorkplace),
            mergeMap(() => {
                return this.itemService.getWorkersFromWorkplace().pipe(
                    map((workersFromWorkplace) => WorkplaceActions.getAllWorkersFromWorkplaceSuccess({ workersFromWorkplace: workersFromWorkplace })),
                    catchError((error) =>
                        of(WorkplaceActions.getAllWorkersFromWorkplaceFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    joinWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WorkplaceActions.joinWorkplace),
            mergeMap(action =>
                this.itemService.assignUserToWorkplace(action.workplace).pipe(
                    map(() => {
                        return WorkplaceActions.updateUserInfo({ workplaceId: action.workplace.id });
                    }),
                    catchError((error) =>
                        of(WorkplaceActions.joinWorkplaceFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    updateUserInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WorkplaceActions.updateUserInfo),
            tap(action => {
                this.updateCurrentUserWorkplace(action.workplaceId);
                this.router.navigateByUrl('/board');
                window.location.reload();
            })
        ),
        { dispatch: false }
    );
}