import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPageComponent } from './containers';

const COMPONENTS = [ManagementPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule
    ],
    exports: [COMPONENTS]
})
export class ManagementModule { }
