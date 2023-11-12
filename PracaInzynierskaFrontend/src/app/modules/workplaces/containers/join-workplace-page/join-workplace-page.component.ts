import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkerDto, Workplace } from 'src/app/models';
import { WorkplaceService } from 'src/app/services';
import { AppState } from 'src/app/store/app.state';
import { WorkplaceActions } from '../../store';
import { getWorkplacesSelector } from '../../store/selectors';

@Component({
    selector: 'app-join-workplace-page',
    templateUrl: './join-workplace-page.component.html',
    styleUrls: ['./join-workplace-page.component.scss']
})
export class JoinWorkplacePageComponent implements OnInit {
    workplaces$!: Observable<Workplace[]>;
    displayedColumns: string[] = ['name', 'code', 'join'];
    displayedHeaders: string[] = ['Nazwa zespołu', "Kod zespołu", 'Dołącz'];

    constructor(private store: Store<AppState>, private router: Router) {
        this.selectWorkplaces();
    }

    ngOnInit(): void {
        this.dispatchWorkplaces();
    }

    private selectWorkplaces(): void {
        this.workplaces$ = this.store.select(getWorkplacesSelector);
    }

    private dispatchWorkplaces(): void {
        this.store.dispatch(WorkplaceActions.getAllItems());
    }

    joinWorkplace(workplace: Workplace): void {
        this.store.dispatch(WorkplaceActions.joinWorkplace({ workplace: workplace }));
    }

    logout(): void {
        localStorage.removeItem("tokenPracaInz");
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl("/login");
    }

    goBack(): void {
        this.router.navigateByUrl("/join-or-create-workplace");
    }

}
