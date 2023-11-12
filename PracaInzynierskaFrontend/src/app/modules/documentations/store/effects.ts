import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { catchError, map, mergeMap, of } from "rxjs";
import { DocumentationService } from "src/app/services/documentation.service";
import { DocumentationsActions } from ".";

@Injectable()
export class DocumentationEffects {

    constructor(private actions$: Actions, private itemService: DocumentationService, private store: Store<AppState>) { }

    getAllItemsFromWorkplace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DocumentationsActions.getAllItemsFromWorkplace),
            mergeMap(() => {
                return this.itemService.getAllDocumentationsFromWorkplace().pipe(
                    map((items) => DocumentationsActions.getAllItemsFromWorkplaceSuccess({ items: items })),
                    catchError((error) =>
                        of(DocumentationsActions.getAllItemsFromWorkplaceFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    getItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DocumentationsActions.getItem),
            mergeMap((action) =>
                this.itemService.getDocumentation(action.id).pipe(
                    map((item) =>
                    DocumentationsActions.getItemSuccess({ item })
                    ),
                    catchError((error) =>
                        of(DocumentationsActions.getItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DocumentationsActions.addItem),
            mergeMap((action) =>
                this.itemService.addDocumentation(action.item).pipe(
                    map(() =>
                    DocumentationsActions.addItemSuccess()
                    ),
                    catchError((error) =>
                        of(DocumentationsActions.addItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    editItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DocumentationsActions.editItem),
            mergeMap((action) =>
                this.itemService.editDocumentation(action.editItem).pipe(
                    map(() =>
                    DocumentationsActions.editItemSuccess()
                    ),
                    catchError((error) =>
                        of(DocumentationsActions.editItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    deleteItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DocumentationsActions.deleteItem),
            mergeMap((action) =>
                this.itemService.deleteDocumentation(action.id).pipe(
                    map(() =>
                    DocumentationsActions.deleteItemSuccess()
                    ),
                    catchError((error) =>
                        of(DocumentationsActions.deleteItemFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    refreshOnSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                DocumentationsActions.addItemSuccess,
                DocumentationsActions.editItemSuccess,
                DocumentationsActions.deleteItemSuccess
            ),
            map(() => DocumentationsActions.getAllItemsFromWorkplace())
        )
    );
}