import {NgModule} from '@angular/core';
import {AppointmentPageRoutingModule} from './appointment-routing.module';
import {AppointmentPage} from './pages/appointment-home/appointment.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    AppointmentPage
  ],
  imports: [
    SharedModule,
    AppointmentPageRoutingModule
  ]
})
export class AppointmentPageModule {
}
