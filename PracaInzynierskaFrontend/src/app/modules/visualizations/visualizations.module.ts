import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVisualizationPageComponent, VisualizationsPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { VisualizationEffects } from './store/effects';
import { MaterialModule } from '../material/material.module';
import { AddOrEditImageComponent } from './components/add-or-edit-image/add-or-edit-image.component';
import { ImageComponent } from './components/image/image.component';

const COMPONENTS = [VisualizationsPageComponent, EditVisualizationPageComponent];

@NgModule({
    declarations: [COMPONENTS, AddOrEditImageComponent, ImageComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('visualizationsState', reducers),
        EffectsModule.forFeature([VisualizationEffects]),
    ],
    exports: [COMPONENTS]
})
export class VisualizationsModule { }
