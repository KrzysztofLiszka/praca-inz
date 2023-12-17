import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimeSpent } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { TimeSpentActions, getTimeSpentsFromUserSelector } from '../../store';
import { AddSpentHourDialogComponent, EditSpentHourDialogComponent } from '../../components';

@Component({
    selector: 'app-spent-hours-page',
    templateUrl: './spent-hours-page.component.html',
    styleUrls: ['./spent-hours-page.component.scss']
})
export class SpentHoursPageComponent implements OnInit {
    timeSpents$!: Observable<TimeSpent[]>;
    displayedColumns: string[] = ['spentHours', 'spentMinutes', 'date', 'actions'];
    displayedHeaders: string[] = ["Spędzono godzin", "Spędzono minut", "Data", ""];

    constructor(private store: Store<AppState>, private dialog: MatDialog) {
        this.selectTimeSpents();
    }

    ngOnInit(): void {
        this.dispatchTimeSpents();
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddSpentHourDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(TimeSpentActions.addItem({ item: result }));
        });
    }

    openEditDialog(timeSpent: TimeSpent): void {
        const dialogRef = this.dialog.open(EditSpentHourDialogComponent, {
            data: { timeSpent: timeSpent },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(TimeSpentActions.editItem({ editItem: result }));
        });
    }

    deleteTimeSpent(timeSpent: TimeSpent): void {
        this.store.dispatch(TimeSpentActions.deleteItem({ id: timeSpent.id }));
    }

    private selectTimeSpents(): void {
        this.timeSpents$ = this.store.select(getTimeSpentsFromUserSelector);
    }

    private dispatchTimeSpents(): void {
        this.store.dispatch(TimeSpentActions.getAllItemsFromUser());
    }
}
