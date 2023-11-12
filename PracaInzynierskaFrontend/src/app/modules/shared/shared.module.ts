import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotificationComponent, TableComponent, TextEditorComponent } from './components';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const COMPONENTS = [TableComponent, TextEditorComponent, SuccessNotificationComponent];

const MODULES = [ReactiveFormsModule, FormsModule, CKEditorModule];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        MaterialModule,
        MODULES
    ],
    exports: [COMPONENTS, MODULES]
})
export class SharedModule { }
