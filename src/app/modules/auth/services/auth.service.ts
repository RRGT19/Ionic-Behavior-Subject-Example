import {Injectable} from '@angular/core';
import {LoadingService} from '../../../core/services/loading.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';
import {UserService} from '../../../core/services/user.service';
import {IUser} from '../../../shared/interfaces/user';

/**
 * The authentication service is used to login and logout of the application.
 * The logged in user details are stored in localStorage.
 */

@Injectable()
export class AuthService {

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router
  ) {
  }

  /**
   * Sign in a user with an email address and password.
   * @param email       The user's email address
   * @param password    The user's password
   */
  login(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadingService.present()
        .then(() => {
          const userData: IUser = {
            name: 'Manolo',
            email: 'test@gmail.com'
          };
          console.log('userData', userData);
          this.userService.setUserData(userData);
          return this.loadingService.dismiss();
        })
        .then(() => {
          return resolve();
        })
        .catch(async (err: any) => {
          console.log(err);
          await this.loadingService.dismiss();
          return reject();
        });
    });
  }

  logout() {
    this.logOutAndGoTo(['auth', 'login']);
  }

  /**
   * Signs out the current user and redirect to another path.
   * @param path The next path to go to.
   */
  private logOutAndGoTo(path: string[]) {
    this.userService.clearData();
    this.router.navigate(path);
  }

}
