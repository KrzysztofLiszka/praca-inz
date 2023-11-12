import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Assignment } from 'src/app/models';
import { AddAssignmentDialogComponent, EditAssignmentDialogComponent } from '../../components';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AssignmentsActions, getAssignmentsFromWorkplaceselector } from '../../store';
import { Observable } from 'rxjs';
import { Status } from 'src/app/constants';
import { NotificationsService } from 'src/app/services';

@Component({
    selector: 'app-board-page',
    templateUrl: './board-page.component.html',
    styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
    assignments$!: Observable<Assignment[]>;
    statuses: string[] = [Status.TO_DO, Status.IN_PROGRESS, Status.REVIEWED, Status.DONE];

    constructor(private dialog: MatDialog, private store: Store<AppState>) {
        this.selectAssignments();
    }

    ngOnInit(): void {
        this.dispatchAssignments();
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddAssignmentDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(AssignmentsActions.addItem({ item: result }));
        });
    }

    private selectAssignments(): void {
        this.assignments$ = this.store.select(getAssignmentsFromWorkplaceselector);
    }

    private dispatchAssignments(): void {
        this.store.dispatch(AssignmentsActions.getAllItemsFromWorkplace());
    }

    openEditDialog(assignment: Assignment): void {
        const dialogRef = this.dialog.open(EditAssignmentDialogComponent, {
            data: { assignment: assignment },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(AssignmentsActions.editItem({ editItem: result }));
        });
    }
}
