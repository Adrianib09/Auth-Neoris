import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { FormUsersComponent } from './pages/form-users/form-users.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'users/form', component: FormUsersComponent },
      { path: 'users/form/:id', component: FormUsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
