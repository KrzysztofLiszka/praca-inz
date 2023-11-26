import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { WorkplacesModule } from './modules/workplaces/workplaces.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors';
import { ManagementModule } from './modules/management/management.module';
import { CoworkersModule } from './modules/coworkers/coworkers.module';
import { MaterialModule } from './modules/material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { DocumentationsModule } from './modules/documentations/documentations.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { VisualizationsModule } from './modules/visualizations/visualizations.module';
import { UsersModule } from './modules/users/users.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        WorkplacesModule,
        CoreModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ManagementModule,
        CoworkersModule,
        MaterialModule,
        AssignmentsModule,
        DocumentationsModule,
        SchedulesModule,
        VisualizationsModule,
        UsersModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
