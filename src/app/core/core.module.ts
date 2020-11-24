import {NgModule} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {ToastService} from './services/toast.service';

import {HttpClientModule} from '@angular/common/http';
import {AlertService} from './services/alert.service';
import {LocalStorageService} from './services/local-storage.service';
import {UserService} from './services/user.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    AuthGuard,
    UserService,
    AlertService,
    ToastService,
    LoadingService,
    LocalStorageService,
  ]
})
export class CoreModule {
}
