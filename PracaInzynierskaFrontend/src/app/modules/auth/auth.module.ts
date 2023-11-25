import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, RegisterPageComponent } from './containers';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProfilePictureDialogComponent, UserSettingsDialogComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [LoginPageComponent, RegisterPageComponent, UserSettingsDialogComponent, UpdateProfilePictureDialogComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule
    ],
    exports: [COMPONENTS]
})
export class AuthModule { }
