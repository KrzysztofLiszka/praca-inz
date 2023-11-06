import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoworkersPageComponent as CoworkersPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { WorkplaceEffects, reducers } from '../workplaces/store';
import { EffectsModule } from '@ngrx/effects';

const COMPONENTS = [CoworkersPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('workplacesState', reducers),
        EffectsModule.forFeature([WorkplaceEffects]),
    ],
    exports: [COMPONENTS]
})
export class CoworkersModule { }
