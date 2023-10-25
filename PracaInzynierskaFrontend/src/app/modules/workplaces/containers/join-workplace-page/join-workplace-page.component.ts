import { Component } from '@angular/core';

@Component({
    selector: 'app-join-workplace-page',
    templateUrl: './join-workplace-page.component.html',
    styleUrls: ['./join-workplace-page.component.scss']
})
export class JoinWorkplacePageComponent {
    items: any[] = [{ name: "Zespół 1" }];
    displayedColumns: string[] = ['name', 'actions'];
    displayedHeaders: string[] = ['Nazwa zespołu', 'Akcje'];
}
