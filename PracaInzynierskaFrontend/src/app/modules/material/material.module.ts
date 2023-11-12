import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MODULES = [MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule];

@NgModule({
    declarations: [],
    imports: [MODULES],
    exports: [MODULES]
})
export class MaterialModule { }
