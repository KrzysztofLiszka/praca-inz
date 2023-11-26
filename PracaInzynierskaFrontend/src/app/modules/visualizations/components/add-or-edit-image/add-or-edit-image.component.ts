import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VisualizationService } from 'src/app/services';

@Component({
    selector: 'app-add-or-edit-image',
    templateUrl: './add-or-edit-image.component.html',
    styleUrls: ['./add-or-edit-image.component.scss']
})
export class AddOrEditImageComponent {
    selectedFile: any;

    constructor(private dialogRef: MatDialogRef<AddOrEditImageComponent>, private route: ActivatedRoute) {
    }

    assignSelectedFile(fileInput: any): void {
        this.selectedFile = fileInput.target.files[0];
    }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.selectedFile);
    }
}
