import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesPageComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ScheduleEffects } from './store/effects';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AddScheduleDialogComponent, EditScheduleDialogComponent } from './components';


const COMPONENTS = [SchedulesPageComponent, AddScheduleDialogComponent, EditScheduleDialogComponent];

@NgModule({
    declarations: [
        COMPONENTS,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        StoreModule.forFeature('schedulesState', reducers),
        EffectsModule.forFeature([ScheduleEffects]),
    ],
    exports: [
        COMPONENTS
    ]
})
export class SchedulesModule { }
