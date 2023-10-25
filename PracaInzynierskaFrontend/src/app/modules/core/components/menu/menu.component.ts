import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    menuItems: MenuItem[] = [
        {text: "TABLICA", redirectTo: "login", matIconName: "assignment"},
        {text: "CZAT ZESPOŁU", redirectTo: "login", matIconName: "chat"},
        {text: "WSPÓŁPRACOWNICY", redirectTo: "login", matIconName: "diversity_3"},
        {text: "HARMONOGRAM", redirectTo: "login", matIconName: "schedule"},
        {text: "SPĘDZONY CZAS", redirectTo: "login", matIconName: "work_history"},
        {text: "DOKUMENTACJA", redirectTo: "login", matIconName: "article"},
        {text: "WIZUALIZACJE", redirectTo: "login", matIconName: "photo_library"},
        {text: "ZARZĄDZANIE", redirectTo: "login", matIconName: "manage_accounts"},
        {text: "OGŁOSZENIA", redirectTo: "login", matIconName: "info"}
    ];

    hasClaim(claim?: string): boolean {
        // TODO: Replace with actual claim checking logic
        return true;
    }
}
