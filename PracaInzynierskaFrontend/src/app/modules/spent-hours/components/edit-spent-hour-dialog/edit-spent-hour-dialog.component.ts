import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimeSpent } from 'src/app/models';

@Component({
  selector: 'app-edit-spent-hour-dialog',
  templateUrl: './edit-spent-hour-dialog.component.html',
  styleUrls: ['./edit-spent-hour-dialog.component.scss']
})
export class EditSpentHourDialogComponent implements OnInit {
    formGroup = this.fb.group({
        id: [""],
        spentHours: [0, [Validators.min(0)]],
        spentMinutes: [0, [Validators.max(59), Validators.min(0)]],
        date: new FormControl<Date | null>(null, Validators.required),
    });

    constructor(private dialogRef: MatDialogRef<EditSpentHourDialogComponent>, private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { timeSpent: TimeSpent }) { }

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
            id: this.data.timeSpent.id,
            spentHours: this.data.timeSpent.spentHours,
            spentMinutes: this.data.timeSpent.spentMinutes,
            date: this.data.timeSpent.date,
        });
    }
}
