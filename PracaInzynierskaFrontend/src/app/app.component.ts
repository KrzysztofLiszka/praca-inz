import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    workplaceName: string = "Nazwa_zespołu_2023";
    username: string = this.authService.currentlyLoggedUser?.name + " " + this.authService.currentlyLoggedUser?.surname;

    constructor(private router: Router, private authService: AuthService) {

    }

    logout(): void {
        localStorage.removeItem("tokenPracaInz");
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl("/login");
    }
}
