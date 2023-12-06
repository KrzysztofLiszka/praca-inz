import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/constants';
import { MenuItem } from 'src/app/models';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    constructor(private router: Router) { }

    menuItems: MenuItem[] = [
        {text: "TABLICA", redirectTo: "board", matIconName: "assignment", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKER, Roles.WORKSPACE_OWNER]},
        { text: "WSPÓŁPRACOWNICY", redirectTo: "coworkers", matIconName: "diversity_3", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKER, Roles.WORKSPACE_OWNER] },
        {text: "HARMONOGRAM", redirectTo: "schedule", matIconName: "schedule", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKER, Roles.WORKSPACE_OWNER]},
        //{text: "SPĘDZONY CZAS", redirectTo: "login", matIconName: "work_history"},
        {text: "DOKUMENTACJE", redirectTo: "documentation", matIconName: "article", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKER, Roles.WORKSPACE_OWNER]},
        {text: "WIZUALIZACJE", redirectTo: "visualization", matIconName: "photo_library", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKER, Roles.WORKSPACE_OWNER]},
        { text: "ZARZĄDZANIE", redirectTo: "management", matIconName: "manage_accounts", rolesThatSeeSection: [Roles.SYSTEM_ADMIN, Roles.WORKSPACE_OWNER] },
        { text: "UŻYTKOWNICY", redirectTo: "users", matIconName: "person", rolesThatSeeSection: [Roles.SYSTEM_ADMIN] },
    ];

    hasRoleToSeeSection(menuItem: MenuItem): boolean {
        const currentUserRoleName = JSON.parse(localStorage.getItem('currentUser') as string)?.roleName;
        return menuItem.rolesThatSeeSection.includes(currentUserRoleName);
    }

    isActivated(item: MenuItem): boolean {
        return this.router.url.includes(item.redirectTo);
    }
}
