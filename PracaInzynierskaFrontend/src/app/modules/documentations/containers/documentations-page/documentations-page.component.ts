import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Documentation } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { DocumentationsActions, getDocumentationsFromWorkplaceselector } from '../../store';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentationDialogComponent, EditDocumentationDialogComponent } from '../../components';

@Component({
    selector: 'app-documentations-page',
    templateUrl: './documentations-page.component.html',
    styleUrls: ['./documentations-page.component.scss']
})
export class DocumentationsPageComponent implements OnInit {

    documentations$!: Observable<Documentation[]>;
    displayedColumns: string[] = ['chapterName', 'enter-delete'];
    displayedHeaders: string[] = ["Nazwa rozdziału", "Akcje"];

    constructor(private store: Store<AppState>, private dialog: MatDialog) {
        this.selectDocumentations();
    }

    ngOnInit(): void {
        this.dispatchDocumentations();
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddDocumentationDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(DocumentationsActions.addItem({ item: result }));
        });
    }

    openEditDialog(documentation: Documentation): void {
        const dialogRef = this.dialog.open(EditDocumentationDialogComponent, {
            data: { documentation: documentation },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(DocumentationsActions.editItem({ editItem: result }));
        });
    }

    deleteDocumentation(documentation: Documentation): void {
        this.store.dispatch(DocumentationsActions.deleteItem({ id: documentation.id}));
    }

    private selectDocumentations(): void {
        this.documentations$ = this.store.select(getDocumentationsFromWorkplaceselector);
    }

    private dispatchDocumentations(): void {
        this.store.dispatch(DocumentationsActions.getAllItemsFromWorkplace());
    }
}
