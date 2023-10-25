import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [COMPONENTS]
})
export class WorkplacesModule { }
