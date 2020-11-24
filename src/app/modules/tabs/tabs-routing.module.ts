import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthGuard} from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'appointment',
        canActivate: [AuthGuard], // Checking to see if you are logged in.
        loadChildren: () => import('./../appointment/appointment.module').then(m => m.AppointmentPageModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./../doctor/doctor.module').then(m => m.DoctorPageModule)
      },
      {
        path: 'profile',
        canActivate: [AuthGuard], // Checking to see if you are logged in.
        loadChildren: () => import('./../profile/profile.module').then(m => m.ProfilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
