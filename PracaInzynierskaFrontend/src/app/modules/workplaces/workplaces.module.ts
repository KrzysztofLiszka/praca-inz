import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkplaceEffects } from './store/effects';
import { CreateWorkplaceDialogComponent } from './components/create-workplace-dialog/create-workplace-dialog.component';

const COMPONENTS = [JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent];

@NgModule({
    declarations: [COMPONENTS, CreateWorkplaceDialogComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('workplacesState', reducers),
        EffectsModule.forFeature([WorkplaceEffects]),
    ],
    exports: [COMPONENTS]
})
export class WorkplacesModule { }
