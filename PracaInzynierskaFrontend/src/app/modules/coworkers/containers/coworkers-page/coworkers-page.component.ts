import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkerDto } from 'src/app/models';
import { WorkplaceActions } from 'src/app/modules/workplaces/store';
import { getWorkersFromWorkplaceselector } from 'src/app/modules/workplaces/store/selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-coworkers-page',
    templateUrl: './coworkers-page.component.html',
    styleUrls: ['./coworkers-page.component.scss']
})
export class CoworkersPageComponent implements OnInit {
    cooworkers$!: Observable<WorkerDto[]>;
    displayedColumns: string[] = ['name', 'surname', 'email'];
    displayedHeaders: string[] = ["Imię", "Nazwisko", "Email"];

    constructor(private store: Store<AppState>) {
        this.selectCooworkers();
    }

    ngOnInit(): void {
        this.dispatchCooworkers();
    }

    private selectCooworkers(): void {
        this.cooworkers$ = this.store.select(getWorkersFromWorkplaceselector);
    }
    
    private dispatchCooworkers(): void {
        this.store.dispatch(WorkplaceActions.getAllWorkersFromWorkplace());
    }
}
