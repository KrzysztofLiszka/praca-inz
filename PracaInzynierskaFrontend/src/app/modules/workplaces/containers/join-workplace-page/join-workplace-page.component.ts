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
    displayedColumns: string[] = ['name', 'code', 'actions'];
    displayedHeaders: string[] = ['Nazwa zespołu', "Kod zespołu", 'Akcje'];

    constructor(private workplaceService: WorkplaceService, private router: Router, private store: Store<AppState>) {
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

    private updateCurrentUserWorkplace(workplaceId: string): void {
        var currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}') as WorkerDto;
        currentUser.workplaceId = workplaceId;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

}
