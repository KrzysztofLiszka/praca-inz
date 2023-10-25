import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, RegisterPageComponent } from './containers';

const COMPONENTS = [LoginPageComponent, RegisterPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class AuthModule { }
