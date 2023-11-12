import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create-workplace-dialog',
    templateUrl: './create-workplace-dialog.component.html',
    styleUrls: ['./create-workplace-dialog.component.scss']
})
export class CreateWorkplaceDialogComponent {
    formGroup = this.fb.group({
        name: [""],
        code: [""]
    });

    constructor(private dialogRef: MatDialogRef<CreateWorkplaceDialogComponent>, private fb: FormBuilder) { }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
