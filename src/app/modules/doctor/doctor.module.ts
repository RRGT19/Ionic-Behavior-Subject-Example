import {NgModule} from '@angular/core';
import {DoctorPageRoutingModule} from './doctor-routing.module';
import {DoctorPage} from './pages/doctor-page/doctor.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DoctorPage
  ],
  imports: [
    SharedModule,
    DoctorPageRoutingModule
  ]
})
export class DoctorPageModule {
}
