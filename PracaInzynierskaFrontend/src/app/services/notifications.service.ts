import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessNotificationComponent } from '../modules/shared/components';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    constructor(private snackBar: MatSnackBar) { }

    showSuccessSnackbar(): void {
        this.snackBar.openFromComponent(SuccessNotificationComponent, {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 2000
        });
    }
}
