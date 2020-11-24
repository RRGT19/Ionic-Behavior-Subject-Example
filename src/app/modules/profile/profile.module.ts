import {NgModule} from '@angular/core';
import {ProfilePageRoutingModule} from './profile-routing.module';
import {ProfilePage} from './pages/profile-page/profile.page';
import {SharedModule} from '../../shared/shared.module';
import {ModalProfileDependantListPage} from './pages/profile-page/modals/modal-profile-dependant-list/modal-profile-dependant-list-page.component';

@NgModule({
  declarations: [
    ProfilePage,
    ModalProfileDependantListPage
  ],
  imports: [
    SharedModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule {
}
