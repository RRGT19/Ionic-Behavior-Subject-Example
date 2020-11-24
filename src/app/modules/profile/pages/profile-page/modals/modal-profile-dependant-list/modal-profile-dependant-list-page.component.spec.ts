import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProfileDependantListPage } from './modal-profile-dependant-list-page.component';

describe('ModalProfileDependantsPage', () => {
  let component: ModalProfileDependantListPage;
  let fixture: ComponentFixture<ModalProfileDependantListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProfileDependantListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProfileDependantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
