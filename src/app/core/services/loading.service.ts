import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

/**
 * Implements a logic to handle multiple calls to the present() and dismiss() method.
 * Reason: When multiple request at the same time, the present() and dismiss() is called
 * more than once, the last loading alert on screen is keep without dismissing.
 */

const PLEASE_WAIT = 'Por favor, espera...';

@Injectable()
export class LoadingService {

  private isLoading = false;
  private loaderCounter = 0;
  private loading: HTMLIonLoadingElement;

  constructor(
    private loadingCtrl: LoadingController
  ) {
  }

  async present() {
    this.loaderCounter = this.loaderCounter + 1;

    if (this.loaderCounter === 1) {
      this.isLoading = true;
      this.loading = await this.loadingCtrl.create({
        message: PLEASE_WAIT
      });
      await this.loading.present();
    }
  }

  async dismiss() {
    this.loaderCounter = this.loaderCounter - 1;

    if (this.loaderCounter === 0) {
      this.isLoading = false;
      await this.loading.dismiss();
    }
  }

  // Solution 2.
  /*async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: 'Please wait...',
    }).then(a => {
      a.present().then(() => {
        // console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => {
            // console.log('abort presenting');
          });
        }
      });
    });
  }

  dismiss() {
    this.isLoading = false;
    return this.loadingCtrl.dismiss();
  }*/

}
