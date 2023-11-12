import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Documentation } from 'src/app/models';

@Component({
    selector: 'app-edit-documentation-dialog',
    templateUrl: './edit-documentation-dialog.component.html',
    styleUrls: ['./edit-documentation-dialog.component.scss']
})
export class EditDocumentationDialogComponent implements OnInit {
    formGroup = this.fb.group({
        id: [""],
        chapterName: [""],
        descriptionHtmlContent: [""],
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditDocumentationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { documentation: Documentation }) { }

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
            id: this.data.documentation.id,
            chapterName: this.data.documentation.chapterName,
            descriptionHtmlContent: this.data.documentation.descriptionHtmlContent,
        });
    }
}
