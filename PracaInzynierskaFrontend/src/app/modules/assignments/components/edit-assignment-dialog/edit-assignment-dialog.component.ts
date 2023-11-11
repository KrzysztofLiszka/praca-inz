import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Status } from 'src/app/constants';
import { Assignment } from 'src/app/models';

@Component({
    selector: 'app-edit-assignment-dialog',
    templateUrl: './edit-assignment-dialog.component.html',
    styleUrls: ['./edit-assignment-dialog.component.scss']
})
export class EditAssignmentDialogComponent implements OnInit {
    statuses: string[] = [Status.TO_DO, Status.IN_PROGRESS, Status.REVIEWED, Status.DONE];
    formGroup = this.fb.group({
        id: [""],
        name: [""],
        descriptionHtmlContent: [""],
        status: [""]
    });

    constructor(private dialogRef: MatDialogRef<EditAssignmentDialogComponent>, private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { assignment: Assignment }) { }

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
            id: this.data.assignment.id,
            name: this.data.assignment.name,
            descriptionHtmlContent: this.data.assignment.descriptionHtmlContent,
            status: this.data.assignment.status,
        });
    }
}
