import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-spent-hour-dialog',
    templateUrl: './add-spent-hour-dialog.component.html',
    styleUrls: ['./add-spent-hour-dialog.component.scss']
})
export class AddSpentHourDialogComponent {
    formGroup = this.fb.group({
        spentHours: [0, [Validators.min(0)]],
        spentMinutes: [0, [Validators.max(59), Validators.min(0)]],
        date: [Date.now, Validators.required]
    });

    constructor(private dialogRef: MatDialogRef<AddSpentHourDialogComponent>, private fb: FormBuilder) { }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
