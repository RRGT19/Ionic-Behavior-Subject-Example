import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalProfileDependantListPage} from './modals/modal-profile-dependant-list/modal-profile-dependant-list-page.component';
import {UserService} from '../../../../core/services/user.service';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(
    public userService: UserService,
    private modalController: ModalController,
  ) {
  }

  async openDependants() {
    const modal = await this.modalController.create({
      component: ModalProfileDependantListPage,
    });
    await modal.present();
  }

}
