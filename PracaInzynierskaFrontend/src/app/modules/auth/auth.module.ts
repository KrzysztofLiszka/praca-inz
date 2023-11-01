import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, RegisterPageComponent } from './containers';
import { AuthService } from 'src/app/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [LoginPageComponent, RegisterPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [COMPONENTS]
})
export class AuthModule { }
