import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Schedule } from 'src/app/models';

@Component({
    selector: 'app-edit-schedule-dialog',
    templateUrl: './edit-schedule-dialog.component.html',
    styleUrls: ['./edit-schedule-dialog.component.scss']
})
export class EditScheduleDialogComponent implements OnInit {
    formGroup = this.fb.group({
        id: [""],
        name: [""],
        hour: [""],
        date: new FormControl<Date | null>(null, Validators.required),
    });

    constructor(private dialogRef: MatDialogRef<EditScheduleDialogComponent>, private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { schedule: Schedule }) { }

    ngOnInit(): void {
        this.patchValues();
    }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }

    private patchValues(): void {
        this.formGroup.patchValue({
            id: this.data.schedule.id,
            name: this.data.schedule.name,
            hour: this.data.schedule.hour,
            date: this.data.schedule.date,
        });
    }
}
