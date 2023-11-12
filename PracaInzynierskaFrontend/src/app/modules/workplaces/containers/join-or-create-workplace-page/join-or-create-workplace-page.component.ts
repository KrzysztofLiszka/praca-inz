import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { CreateWorkplaceDialogComponent } from '../../components/create-workplace-dialog/create-workplace-dialog.component';
import { WorkplaceActions } from '../../store';

@Component({
    selector: 'app-join-or-create-workplace-page',
    templateUrl: './join-or-create-workplace-page.component.html',
    styleUrls: ['./join-or-create-workplace-page.component.scss']
})
export class JoinOrCreateWorkplacePageComponent {
    constructor(private router: Router, private dialog: MatDialog, private store: Store<AppState>) { }

    goToJoinWorkplacePage(): void {
        this.router.navigateByUrl("/join-workplace");
    }

    logout(): void {
        localStorage.removeItem("tokenPracaInz");
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl("/login");
    }

    openCreateWorkplaceDialog(): void {
        const dialogRef = this.dialog.open(CreateWorkplaceDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.store.dispatch(WorkplaceActions.addItem({ item: result }));
        });
    }
}
