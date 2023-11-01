import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoworkersPageComponent as CoworkersPageComponent } from './containers';

const COMPONENTS = [CoworkersPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule
    ],
    exports: [COMPONENTS]
})
export class CoworkersModule { }
