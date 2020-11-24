import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {LocalStorageKey} from '../../shared/interfaces/local-storage';

/**
 * This is an abstraction to access to the web storage on the client side.
 * Notes: 1. We are using localStorage due to business requirements.
 *        2. The localStorage is only cleared when the user logs out.
 */

@Injectable()
export class LocalStorageService {

  private readonly storage: Storage;

  /**
   * Be able to subscribe to the changes and react on them from other places of our application.
   */
  protected changes$;

  constructor() {
    this.storage = localStorage;
    this.changes$ = new Subject();
  }

  protected get(key: LocalStorageKey): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  protected set(key: LocalStorageKey, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.storage.setItem(key, JSON.stringify(value));
      this.notifyChanges('set', key, value);
      return true;
    }
    return false;
  }

  protected remove(key: LocalStorageKey): boolean {
    if (this.isLocalStorageSupported) {
      this.storage.removeItem(key);
      this.notifyChanges('remove', key);
      return true;
    }
    return false;
  }

  clear() {
    this.storage.clear();
  }

  private get isLocalStorageSupported(): boolean {
    return !!this.storage;
  }

  /**
   * Emit on both 'set' and 'remove' actions.
   * @param type    The type of action.
   * @param key     The key used to manipulate.
   * @param value   (Optional) The value in case of a 'set' type.
   */
  private notifyChanges(type: 'set' | 'remove', key: LocalStorageKey, value?: string) {
    this.changes$.next({
      type,
      key,
      value
    });
  }

}
