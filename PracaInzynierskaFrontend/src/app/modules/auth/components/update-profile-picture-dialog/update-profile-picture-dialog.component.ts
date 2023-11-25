import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-update-profile-picture-dialog',
  templateUrl: './update-profile-picture-dialog.component.html',
  styleUrls: ['./update-profile-picture-dialog.component.scss']
})
export class UpdateProfilePictureDialogComponent {
    selectedFile: any;

    constructor(private dialogRef: MatDialogRef<UpdateProfilePictureDialogComponent>, private authService: AuthService) { }

    assignSelectedFile(fileInput: any): void {
        this.selectedFile = fileInput.target.files[0];
    }
    
    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.authService.updateUserPicture(this.selectedFile).subscribe();
        this.dialogRef.close("RELOAD_PAGE");
    }
}
