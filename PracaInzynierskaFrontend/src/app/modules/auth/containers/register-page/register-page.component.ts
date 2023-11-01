import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
    formGroup = this.fb.group({
        email: ["", Validators.email],
        name: [""],
        surname: [""],
        password: [""],
    });

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

    goToLoginPage(): void {
        this.router.navigateByUrl("/login");
    }

    registerUser(): void {
        this.authService.registerToTheSystem(this.formGroup.value as RegisterDto).subscribe(response => {
            this.router.navigateByUrl("/login");
        });
    }
}
