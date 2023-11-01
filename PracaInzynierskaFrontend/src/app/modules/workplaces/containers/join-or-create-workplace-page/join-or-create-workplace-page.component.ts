import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-or-create-workplace-page',
  templateUrl: './join-or-create-workplace-page.component.html',
  styleUrls: ['./join-or-create-workplace-page.component.scss']
})
export class JoinOrCreateWorkplacePageComponent {
    constructor(private router: Router) {}
    
    goToJoinWorkplacePage(): void {
        this.router.navigateByUrl("/join-workplace");
    }
}
