import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ExpensesComponent } from "./pages/expenses/expenses.component";
import { GroupsComponent } from "./pages/groups/groups.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        AppRoutingModule,
        DashboardComponent,
        ExpensesComponent,
        GroupsComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }