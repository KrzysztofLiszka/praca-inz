import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkplaceEffects, reducers } from '../workplaces/store';

const COMPONENTS = [PaymentsPageComponent];

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
export class PaymentsModule { }
