import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-schedule-dialog',
    templateUrl: './add-schedule-dialog.component.html',
    styleUrls: ['./add-schedule-dialog.component.scss']
})
export class AddScheduleDialogComponent {
    formGroup = this.fb.group({
        name: [""],
        hour: [""],
        date: [Date.now, Validators.required]
    });

    constructor(private dialogRef: MatDialogRef<AddScheduleDialogComponent>, private fb: FormBuilder) { }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
