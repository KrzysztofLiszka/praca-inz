import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkerDto } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { UsersActions, getUsersSelector } from '../../store';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
    users$!: Observable<WorkerDto[]>;
    displayedColumns: string[] = ['name', 'surname', 'email', "image", "delete"];
    displayedHeaders: string[] = ["Imię", "Nazwisko", "Email", "Zdjęcie", "Usuń"];

    constructor(private store: Store<AppState>) {
        this.selectUsers();
    }

    ngOnInit(): void {
        this.dispatchUsers();
    }

    private selectUsers(): void {
        this.users$! = this.store.select(getUsersSelector);
    }

    private dispatchUsers(): void {
        this.store.dispatch(UsersActions.getAllItems());
    }

    deleteUser(user: WorkerDto): void {
        this.store.dispatch(UsersActions.deleteItem({id: user.id}));
    }
}
