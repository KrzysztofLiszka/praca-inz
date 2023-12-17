import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpentHoursPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { TimeSpentEffects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AddSpentHourDialogComponent, EditSpentHourDialogComponent } from './components';

const COMPONENTS = [SpentHoursPageComponent, AddSpentHourDialogComponent, EditSpentHourDialogComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('spentHoursState', reducers),
        EffectsModule.forFeature([TimeSpentEffects]),
    ],
    exports: [COMPONENTS]
})
export class SpentHoursModule { }
