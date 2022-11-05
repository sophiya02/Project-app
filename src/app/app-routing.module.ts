import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path: '', component: AppComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'employees' , component: EmployeeListComponent },
  {path: 'register' , component: RegisterComponent },
  {path: 'register/:id' , component: RegisterComponent },
  {path: '', pathMatch:'full', redirectTo: '/employees'},
  {path: 'error', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, EmployeeListComponent, ErrorComponentComponent, RegisterComponent]
