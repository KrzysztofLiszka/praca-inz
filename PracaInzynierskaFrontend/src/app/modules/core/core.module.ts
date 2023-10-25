import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [MenuComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule
    ],
    exports: [COMPONENTS]
})
export class CoreModule { }
