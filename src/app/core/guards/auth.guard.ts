import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {AlertService} from '../services/alert.service';

/**
 * Used to prevent unauthenticated users from accessing restricted routes.
 * This guard uses the UserService to check if the user is logged in.
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) {
  }

  /**
   * Requiring authentication.
   */
  checkLogin(): boolean {
    const currentUser = this.userService.currentUserData;

    if (currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in
    this.alertService.presentMessage(
      'Oops!',
      'Debes iniciar sesión para acceder a esta funcionalidad.'
    );
    return false;
  }

  /**
   * Accessible only to authenticated users.
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

}
