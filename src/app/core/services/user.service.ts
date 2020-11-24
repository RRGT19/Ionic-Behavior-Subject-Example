import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {LocalStorageKey} from '../../shared/interfaces/local-storage';
import {IUser} from '../../shared/interfaces/user';
import {BehaviorSubject, Observable} from 'rxjs';

/**
 * This is an abstraction to access the user's data from a single source.
 * This service extends LocalStorageService to "set" and "get" the data.
 */

@Injectable()
export class UserService extends LocalStorageService {

  private bsCurrentUser: BehaviorSubject<IUser>;

  // Observable that can be used when you want a component to reactively update when a user logs in or out.
  currentUser$: Observable<IUser>;

  constructor() {
    super();
    this.bsCurrentUser = new BehaviorSubject<IUser>(this.userData);
    this.currentUser$ = this.bsCurrentUser.asObservable();
  }

  // Setters

  setUserData(data: IUser): void {
    this.bsCurrentUser.next(data);
    this.set(LocalStorageKey.USER, data);
  }

  // Getters

  /**
   * Property that can be used when you just want to get the current value of the logged in user
   * but don't need to reactively update when it changes.
   */
  public get currentUserData(): IUser {
    if (!this.bsCurrentUser.value) {
      this.bsCurrentUser = new BehaviorSubject<IUser>(this.userData);
    }
    return this.bsCurrentUser.value;
  }

  private get userData(): IUser {
    return this.get(LocalStorageKey.USER);
  }

  // Clear data

  clearData(): void {
    this.remove(LocalStorageKey.USER);
    this.bsCurrentUser.next(null);
  }

}
