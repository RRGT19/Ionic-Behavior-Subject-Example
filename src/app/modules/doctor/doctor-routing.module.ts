import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DoctorPage} from './pages/doctor-page/doctor.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule {
}
