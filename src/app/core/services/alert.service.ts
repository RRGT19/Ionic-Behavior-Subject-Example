import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable()
export class AlertService {

  constructor(
    private alertController: AlertController
  ) {
  }

  async presentConfirm(title: string, message: string, okText: string = 'Ok'): Promise<boolean> {
    return new Promise(async (resolve: any, reject: any) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {text: 'Cancelar', role: 'cancel'},
          {text: okText, handler: () => resolve(true)}
        ]
      });

      await alert.present();
    });
  }

  async presentMessage(title: string, message: string, okText: string = 'Ok'): Promise<void> {
    return new Promise(async (resolve: any, reject: any) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {text: okText, handler: () => resolve()}
        ]
      });

      await alert.present();
    });
  }

}
