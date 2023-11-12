import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationsPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { AddDocumentationDialogComponent, EditDocumentationDialogComponent } from './components';
import { MaterialModule } from '../material/material.module';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DocumentationEffects } from './store/effects';

const COMPONENTS = [DocumentationsPageComponent, AddDocumentationDialogComponent, EditDocumentationDialogComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('documentationsState', reducers),
        EffectsModule.forFeature([DocumentationEffects]),
    ],
    exports: [COMPONENTS]
})
export class DocumentationsModule { }
