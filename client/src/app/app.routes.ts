import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChannelManagementComponent } from './channel-management/channel-management.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'group-management', component: GroupManagementComponent },
  { path: 'channel-management', component: ChannelManagementComponent },
  { path: '**', redirectTo: '' }  // Fallback route
];
