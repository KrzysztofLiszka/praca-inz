import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VisualizationService } from 'src/app/services';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    imageSrc: any;

    constructor(private dialogRef: MatDialogRef<ImageComponent>, @Inject(MAT_DIALOG_DATA) public data: { image: any }, private visualizationService: VisualizationService) {
    }

    ngOnInit(): void {
        this.imageSrc = this.data.image.file;
    }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    deleteImage(): void {
        this.visualizationService.deleteImage(this.data.image.id).subscribe(res => this.dialogRef.close("DELETED"));
    }
}
