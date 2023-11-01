import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginDto, WorkerDto } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
    formGroup = this.fb.group({
        email: ["", Validators.email],
        password: [""],
    });
    private subscription: Subscription = new Subscription();

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    login(): void {
        this.subscription.add(this.authService.loginToSystem(this.formGroup.value as LoginDto).subscribe(res => {
            localStorage.setItem('tokenPracaInz', res.token);
            localStorage.setItem('currentUser', JSON.stringify(res.user as WorkerDto));
            this.router.navigateByUrl("/");
        }));
    }

    goToRegisterPage(): void {
        this.router.navigateByUrl("/register");
    }
}
