import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { UserEffects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';

const COMPONENTS = [UsersPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        StoreModule.forFeature('usersState', reducers),
        EffectsModule.forFeature([UserEffects]),
    ],
    exports: [COMPONENTS]
})
export class UsersModule { }
