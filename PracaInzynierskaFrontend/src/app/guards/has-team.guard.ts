import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HasTeamGuard {
    readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        const workplaceId = this.authService.currentlyLoggedUser?.workplaceId;
        if (workplaceId == null || workplaceId == this.EMPTY_GUID) {
            this.router.navigate(['/join-or-create-workplace']);
            return false;
        }
        return true;
    }
}
