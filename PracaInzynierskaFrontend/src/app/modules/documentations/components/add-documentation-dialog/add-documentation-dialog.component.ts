import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-documentation-dialog',
  templateUrl: './add-documentation-dialog.component.html',
  styleUrls: ['./add-documentation-dialog.component.scss']
})
export class AddDocumentationDialogComponent {
    formGroup = this.fb.group({
        chapterName: [""],
        descriptionHtmlContent: [""],
    });

    constructor(private dialogRef: MatDialogRef<AddDocumentationDialogComponent>, private fb: FormBuilder) { }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
