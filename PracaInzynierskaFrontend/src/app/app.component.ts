import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { WorkplaceActions } from './modules/workplaces/store';
import { Workplace } from './models';
import { Observable } from 'rxjs';
import { getWorkplaceSelector } from './modules/workplaces/store/selectors';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfilePictureDialogComponent, UserSettingsDialogComponent } from './modules/auth/components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    workplaceName: string = "Nazwa_zespołu_2023";
    workplace$!: Observable<Workplace | undefined>;
    username: string = this.authService.currentlyLoggedUser?.name + " " + this.authService.currentlyLoggedUser?.surname;
    profilePicture: any;

    constructor(private router: Router, private authService: AuthService, private store: Store<AppState>, private dialog: MatDialog) {
        this.selectWorkplace();
    }

    ngOnInit(): void {
        this.dispatchWorkplace();
        this.authService.getUserPicture().subscribe(res => this.profilePicture = res.file);
    }

    getBase64Data(byteFile: any): any | null {
        return `data:image/jpg;base64,${byteFile}`;
    }

    logout(): void {
        localStorage.removeItem("tokenPracaInz");
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl("/login");
    }

    isLoggedInAndHasTem(): boolean {
        const workplaceId = this.authService.currentlyLoggedUser?.workplaceId;
        const isLoggedIn = this.authService.isAuthenticated();
        var hasTeam = true;
        if (workplaceId == null || workplaceId == this.EMPTY_GUID) hasTeam = false;
        return isLoggedIn && hasTeam;
    }

    private dispatchWorkplace(): void {
        const workplaceId = this.authService.currentlyLoggedUser?.workplaceId;
        if (!workplaceId) return;
        this.store.dispatch(WorkplaceActions.getItem({ id: workplaceId }));
    }

    private selectWorkplace(): void {
        this.workplace$ = this.store.select(getWorkplaceSelector);
    }

    hasProfilePicture(): boolean {
        if(this.profilePicture == "" || !this.profilePicture) return false;
        return true;
    }

    openUserSettingsDialog(): void {
        const dialogRef = this.dialog.open(UserSettingsDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.authService.updateUser(result).subscribe(res => {
                const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
                currentUser.name = result.name;
                currentUser.surname = result.surname;
                currentUser.email = result.email;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                window.location.reload();
            });
        });
    }

    openUpdateProfilePicuteDialog(): void {
        const dialogRef = this.dialog.open(UpdateProfilePictureDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            window.location.reload();
        });
    }
}
