import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Status } from 'src/app/constants';

@Component({
    selector: 'app-add-assignment-dialog',
    templateUrl: './add-assignment-dialog.component.html',
    styleUrls: ['./add-assignment-dialog.component.scss']
})
export class AddAssignmentDialogComponent {
    statuses: string[] = [Status.TO_DO, Status.IN_PROGRESS, Status.REVIEWED, Status.DONE];
    formGroup = this.fb.group({
        name: [""],
        descriptionHtmlContent: [""],
        status: [Status.TO_DO]
    });

    constructor(private dialogRef: MatDialogRef<AddAssignmentDialogComponent>, private fb: FormBuilder) { }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
