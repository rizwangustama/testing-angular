import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { DetailEmployeeComponent } from './features/employee/detail-employee/detail-employee.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './features/error/error.component';


const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee/add',
    component: DetailEmployeeComponent,
  },
  {
    path: 'employee/:id',
    component: DetailEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
