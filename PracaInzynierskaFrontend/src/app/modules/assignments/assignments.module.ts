import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './containers';
import { AddAssignmentDialogComponent, BoardColumnComponent } from './components';
import { AssignmentEffects, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditAssignmentDialogComponent } from './components/edit-assignment-dialog/edit-assignment-dialog.component';

const COMPONENTS = [BoardPageComponent, BoardColumnComponent, AddAssignmentDialogComponent];

@NgModule({
    declarations: [COMPONENTS, EditAssignmentDialogComponent],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        StoreModule.forFeature('assignmentsState', reducers),
        EffectsModule.forFeature([AssignmentEffects]),
    ],
    exports: [COMPONENTS]
})
export class AssignmentsModule { }
