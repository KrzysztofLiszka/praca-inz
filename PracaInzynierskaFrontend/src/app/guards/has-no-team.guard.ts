import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HasNoTeamGuard {
    readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    constructor(private authService: AuthService) { }

    canActivate(): boolean {
        const workplaceId = this.authService.currentlyLoggedUser?.workplaceId;
        if (workplaceId == null || workplaceId == this.EMPTY_GUID) {
            return true;
        }
        return false;
    }
}
