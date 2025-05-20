import { Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ExpensesComponent } from "./pages/expenses/expenses.component";
import { GroupsComponent } from "./pages/groups/groups.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

export const routes: Routes = [{
    path: '', redirectTo: 'dashboard', pathMatch:'full'},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'expenses', component: ExpensesComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'groups', component: GroupsComponent }
];
