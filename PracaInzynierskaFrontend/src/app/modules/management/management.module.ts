import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [ManagementPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [COMPONENTS]
})
export class ManagementModule { }
