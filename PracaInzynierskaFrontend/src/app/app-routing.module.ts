import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from './modules/auth/containers';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './modules/workplaces/containers';
import { AppComponent } from './app.component';
import { AuthGuard, HasNoTeamGuard as HasNoTeamGuard, HasTeamGuard as HasTeamGuard } from './guards';

const routes: Routes = [
    { path: "", component: AppComponent, canActivate: [AuthGuard, HasTeamGuard] },
    { path: "login", component: LoginPageComponent },
    { path: "register", component: RegisterPageComponent },
    { path: "join-or-create-workplace", component: JoinOrCreateWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] },
    { path: "join-workplace", component: JoinWorkplacePageComponent, canActivate: [AuthGuard, HasNoTeamGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
