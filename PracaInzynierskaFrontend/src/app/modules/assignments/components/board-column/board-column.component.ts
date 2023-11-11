import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from 'src/app/models';

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

    onEditClick(item: Assignment): void {
        this.editClicked.emit(item);
    }

    getAvailableAssignments(): Assignment[] {
        if(!this.assignments) return [];
        return this.assignments?.filter(x => x.status === this.status);
    }
}
