import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerDto, Workplace } from 'src/app/models';
import { WorkplaceService } from 'src/app/services';

@Component({
    selector: 'app-join-workplace-page',
    templateUrl: './join-workplace-page.component.html',
    styleUrls: ['./join-workplace-page.component.scss']
})
export class JoinWorkplacePageComponent implements OnInit {
    workplaces: Workplace[] = [];
    displayedColumns: string[] = ['name', 'code', 'actions'];
    displayedHeaders: string[] = ['Nazwa zespołu', "Kod zespołu", 'Akcje'];

    constructor(private workplaceService: WorkplaceService, private router: Router) { }

    ngOnInit(): void {
        this.getWorkplaces();
    }

    joinWorkplace(workplace: Workplace): void {
        this.workplaceService.assignUserToWorkplace(workplace).subscribe(res => {
            this.updateCurrentUserWorkplace(workplace.id);
            this.router.navigateByUrl("/");
        });
    }

    private getWorkplaces(): void {
        this.workplaceService.getAllWorkplaces().subscribe(response => this.workplaces = response);
    }

    private updateCurrentUserWorkplace(workplaceId: string): void {
        var currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}') as WorkerDto;
        currentUser.workplaceId = workplaceId;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

}
