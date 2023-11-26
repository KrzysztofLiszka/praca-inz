import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from './modules/auth/containers';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './modules/workplaces/containers';
import { AuthGuard, HasNoTeamGuard as HasNoTeamGuard, HasTeamGuard as HasTeamGuard } from './guards';
import { ManagementPageComponent } from './modules/management/containers';
import { CoworkersPageComponent } from './modules/coworkers/containers';
import { BoardPageComponent } from './modules/assignments/containers';
import { DocumentationsPageComponent } from './modules/documentations/containers';
import { SchedulesPageComponent } from './modules/schedules/containers';
import { EditVisualizationPageComponent, VisualizationsPageComponent } from './modules/visualizations/containers';

const routes: Routes = [
    { path: "login", component: LoginPageComponent },
    { path: "register", component: RegisterPageComponent },
    { path: "join-or-create-workplace", component: JoinOrCreateWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] },
    { path: "join-workplace", component: JoinWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] },
    { path: "management", component: ManagementPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "coworkers", component: CoworkersPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "board", component: BoardPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "documentation", component: DocumentationsPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "schedule", component: SchedulesPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "visualization", component: VisualizationsPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "edit-visualization/:id", component: EditVisualizationPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
