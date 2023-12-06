import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { EditWorkerDialogComponent } from './components/edit-worker-dialog/edit-worker-dialog.component';

const COMPONENTS = [ManagementPageComponent];

@NgModule({
    declarations: [COMPONENTS, EditWorkerDialogComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports: [COMPONENTS]
})
export class ManagementModule { }
