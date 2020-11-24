import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../../../../../../core/services/user.service';

@Component({
  templateUrl: './modal-profile-dependant-list-page.component.html',
  styleUrls: ['./modal-profile-dependant-list-page.component.scss'],
})
export class ModalProfileDependantListPage implements OnInit {

  constructor(
    public userService: UserService,
    private modalCtrl: ModalController,
  ) {
  }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(res => console.log(res));
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
