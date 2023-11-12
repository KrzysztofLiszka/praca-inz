import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { WorkplaceActions } from './modules/workplaces/store';
import { Workplace } from './models';
import { Observable } from 'rxjs';
import { getWorkplaceSelector } from './modules/workplaces/store/selectors';

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

    constructor(private router: Router, private authService: AuthService, private store: Store<AppState>) {
        this.selectWorkplace();
    }

    ngOnInit(): void {
        this.dispatchWorkplace();
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
}
