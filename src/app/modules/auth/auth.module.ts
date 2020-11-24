import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginPage} from './pages/login/login.page';
import {SharedModule} from '../../shared/shared.module';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
