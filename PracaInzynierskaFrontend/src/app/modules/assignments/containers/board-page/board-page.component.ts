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
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-board-page',
    templateUrl: './board-page.component.html',
    styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
    assignments$!: Observable<Assignment[]>;
    assignments: Assignment[] = [];
    statuses: string[] = [Status.TO_DO, Status.IN_PROGRESS, Status.REVIEWED, Status.DONE];

    constructor(private dialog: MatDialog, private store: Store<AppState>) {
        this.selectAssignments();
    }

    ngOnInit(): void {
        this.dispatchAssignments();
        this.assignments$.subscribe(res => this.assignments = res);
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

    drop(event: CdkDragDrop<Assignment[]>, status: string) {
        const item = event.item.data as Assignment;
        const itemCopy = JSON.parse(JSON.stringify(item));
        itemCopy.status = status;
        this.store.dispatch(AssignmentsActions.editItem({ editItem: itemCopy}));
    }

    getAvailableAssignments(status: string): Assignment[] {
        if (!this.assignments) return [];
        return this.assignments?.filter(x => x.status === status);
    }

    deleteAssignment(assignment: Assignment): void {
        this.store.dispatch(AssignmentsActions.deleteItem({ id: assignment.id }));
    }

    getBase64Data(assignment: Assignment): any | null {
        return `data:image/jpg;base64,${assignment.profilePicture}`;
    }

    hasProfilePicture(assignment: Assignment): boolean {
        if(!assignment.profilePicture || assignment.profilePicture == "") return false;
        return true;
    }
}
