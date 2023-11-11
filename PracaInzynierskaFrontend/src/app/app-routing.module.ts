import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from './modules/auth/containers';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './modules/workplaces/containers';
import { AuthGuard, HasNoTeamGuard as HasNoTeamGuard, HasTeamGuard as HasTeamGuard } from './guards';
import { ManagementPageComponent } from './modules/management/containers';
import { CoworkersPageComponent } from './modules/coworkers/containers';
import { BoardPageComponent } from './modules/assignments/containers';

const routes: Routes = [
    { path: "login", component: LoginPageComponent },
    { path: "register", component: RegisterPageComponent },
    { path: "join-or-create-workplace", component: JoinOrCreateWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] },
    { path: "join-workplace", component: JoinWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] },
    { path: "management", component: ManagementPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "coworkers", component: CoworkersPageComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "board", component: BoardPageComponent, canActivate: [AuthGuard, HasTeamGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
