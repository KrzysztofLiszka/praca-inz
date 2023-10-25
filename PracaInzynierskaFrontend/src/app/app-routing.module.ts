import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from './modules/auth/containers';
import { JoinOrCreateWorkplacePageComponent, JoinWorkplacePageComponent } from './modules/workplaces/containers';

const routes: Routes = [
    { path: "login", component: LoginPageComponent },
    { path: "register", component: RegisterPageComponent },
    { path: "join-or-create-workplace", component: JoinOrCreateWorkplacePageComponent },
    { path: "join-workplace", component: JoinWorkplacePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
