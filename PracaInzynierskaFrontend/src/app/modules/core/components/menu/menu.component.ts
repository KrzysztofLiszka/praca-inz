import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'src/app/models';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    constructor(private router: Router) { }

    menuItems: MenuItem[] = [
        {text: "TABLICA", redirectTo: "board", matIconName: "assignment"},
        //{text: "CZAT ZESPOŁU", redirectTo: "login", matIconName: "chat"},
        { text: "WSPÓŁPRACOWNICY", redirectTo: "coworkers", matIconName: "diversity_3" },
        //{text: "HARMONOGRAM", redirectTo: "login", matIconName: "schedule"},
        //{text: "SPĘDZONY CZAS", redirectTo: "login", matIconName: "work_history"},
        {text: "DOKUMENTACJE", redirectTo: "documentation", matIconName: "article"},
        //{text: "WIZUALIZACJE", redirectTo: "login", matIconName: "photo_library"},
        { text: "ZARZĄDZANIE", redirectTo: "management", matIconName: "manage_accounts" },
        //{text: "OGŁOSZENIA", redirectTo: "login", matIconName: "info"}
    ];

    hasClaim(claim?: string): boolean {
        // TODO: Replace with actual claim checking logic
        return true;
    }

    isActivated(item: MenuItem): boolean {
        return this.router.url.includes(item.redirectTo);
    }
}
