import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-user-settings-dialog',
  templateUrl: './user-settings-dialog.component.html',
  styleUrls: ['./user-settings-dialog.component.scss']
})
export class UserSettingsDialogComponent implements OnInit {
    formGroup = this.fb.group({
        email: [""],
        name: [""],
        surname: [""]
    });

    constructor(private dialogRef: MatDialogRef<UserSettingsDialogComponent>, private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        this.formGroup.patchValue({
            email: this.authService.currentlyLoggedUser.email,
            name:  this.authService.currentlyLoggedUser.name,
            surname: this.authService.currentlyLoggedUser.surname,
        });
    }

    closeWithoutSaving(): void {
        this.dialogRef.close();
    }

    closeWithSaving(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
