import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Assignment } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { AssignmentsActions } from '../../store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-board-column',
    templateUrl: './board-column.component.html',
    styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent {
    @Input() backgroundColor: string = "rgba(38,42,45,255)";
    @Input() assignments: Assignment[] | null | undefined = [];
    @Input() header: string = "";
    @Input() status: string = "";
    @Output() editClicked = new EventEmitter<any>();

    constructor(private store: Store<AppState>) { }

    onEditClick(item: Assignment): void {
        this.editClicked.emit(item);
    }

    getAvailableAssignments(): Assignment[] {
        if (!this.assignments) return [];
        return this.assignments?.filter(x => x.status === this.status);
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
