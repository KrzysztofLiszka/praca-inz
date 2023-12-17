import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { SchedulesActions, getSchedulesFromTimelineSelector } from '../../store';
import { FormBuilder, FormControl } from '@angular/forms';
import { AddScheduleDialogComponent, EditScheduleDialogComponent } from '../../components';

@Component({
    selector: 'app-schedules-page',
    templateUrl: './schedules-page.component.html',
    styleUrls: ['./schedules-page.component.scss']
})

export class SchedulesPageComponent implements OnDestroy, OnInit {

    formGroup = this.fb.group({
        fromDate: new FormControl<Date | null>(null),
        toDate: new FormControl<Date | null>(null),
    });

    schedules$!: Observable<Schedule[]>;
    displayedColumns: string[] = ['name', 'date', 'hour', 'actions'];
    displayedHeaders: string[] = ["Nazwa", 'Data', 'Godzina', "Akcje"];

    constructor(private store: Store<AppState>, private dialog: MatDialog, private fb: FormBuilder) {
        this.selectSchedules();
    }

    ngOnInit(): void {
        this.dispatchSchedules();
    }

    ngOnDestroy(): void {
        if (!this.formGroup.value.fromDate || !this.formGroup.value.toDate) return;
        localStorage.setItem("fromDate", this.formGroup.value.toString());
        localStorage.setItem("toDate", this.formGroup.value.toString());
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddScheduleDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(SchedulesActions.addItem({ item: result }));
        });
    }

    openEditDialog(schedule: Schedule): void {
        const dialogRef = this.dialog.open(EditScheduleDialogComponent, {
            data: { schedule: schedule },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(SchedulesActions.editItem({ editItem: result }));
        });
    }

    deleteSchedule(schedule: Schedule): void {
        this.store.dispatch(SchedulesActions.deleteItem({ id: schedule.id }));
    }

    dispatchSchedulesWithFilters(): void {
        if (!this.formGroup.value.fromDate) return;
        if (!this.formGroup.value.toDate) return;
        this.store.dispatch(SchedulesActions.getItemsFromTimeline({ from: this.formGroup.value.fromDate, to: this.formGroup.value.toDate }));
    }

    private selectSchedules(): void {
        this.schedules$ = this.store.select(getSchedulesFromTimelineSelector);
    }

    private dispatchSchedules(): void {
        this.store.dispatch(SchedulesActions.getItemsFromTimeline({}));
    }
}
