import {NgModule} from '@angular/core';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './pages/home-page/home.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule {
}
