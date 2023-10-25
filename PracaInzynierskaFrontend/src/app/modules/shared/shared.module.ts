import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [TableComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [COMPONENTS]
})
export class SharedModule { }
