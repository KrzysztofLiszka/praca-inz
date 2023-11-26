import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VisualizationService } from 'src/app/services';
import { AddOrEditImageComponent } from '../../components';
import { Visualization } from 'src/app/models';
import { ImageComponent } from '../../components/image/image.component';

@Component({
    selector: 'app-edit-visualization-page',
    templateUrl: './edit-visualization-page.component.html',
    styleUrls: ['./edit-visualization-page.component.scss']
})
export class EditVisualizationPageComponent implements OnInit {
    readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    visualizationId: string | null = "";
    isEditModeOn: boolean = false;
    images: any[] = [];

    constructor(private route: ActivatedRoute, private visualizationsService: VisualizationService, private dialog: MatDialog) {
        this.visualizationId = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.isEditModeOn = this.determineIfEditModeIsOn();
        this.fetchImages();
    }

    private determineIfEditModeIsOn(): boolean {
        if (this.visualizationId == this.EMPTY_GUID) return false;
        return true;
    }

    private fetchImages(): void {
        if (!this.visualizationId) return;
        this.visualizationsService.getImages(this.visualizationId).subscribe(res => this.images = res);
    }

    getBase64Data(image: any): any | null {
        return `data:image/jpg;base64,${image.data}`;
    }

    openAddImageDialog(): void {
        const dialogRef = this.dialog.open(AddOrEditImageComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            if (!this.visualizationId) return;
            this.visualizationsService.addImage(this.visualizationId, result).subscribe(res => window.location.reload());
        });
    }

    openImageDialog(image: any): void {
        console.log(image);
        var object: any = {};
        object.id = image.id;
        object.file = this.getBase64Data(image);
        const dialogRef = this.dialog.open(ImageComponent, {
            data: { image: object },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            window.location.reload();
        });
    }
}
