import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/constants';
import { WorkerDto } from 'src/app/models';
import { WorkplaceActions } from 'src/app/modules/workplaces/store';
import { getWorkersFromWorkplaceselector } from 'src/app/modules/workplaces/store/selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-management-page',
    templateUrl: './management-page.component.html',
    styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {
    cooworkers$!: Observable<WorkerDto[]>;
    displayedColumnsCoworkers: string[] = ['name', 'surname', 'email', "image", "roleName", 'actions'];
    displayedHeadersCoworkers: any[] = ["Nazwa", "Nazwisko", "Email", "Zdjęcie", "Rola", ''];

    roles: any[] = [{ name: Roles.ACCOUNTANT }, { name: Roles.WORKER }, { name: Roles.WORKSPACE_OWNER }];
    displayedColumnsRoles: string[] = ['name'];
    displayedHeadersRoles: string[] = ["Nazwa roli"];

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
