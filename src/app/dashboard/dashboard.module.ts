import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsersComponent } from './pages/form-users/form-users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    FormUsersComponent,
    ListUsersComponent,
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
