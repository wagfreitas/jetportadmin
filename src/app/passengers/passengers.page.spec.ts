import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassengersPage } from './passengers.page';

describe('PassengersPage', () => {
  let component: PassengersPage;
  let fixture: ComponentFixture<PassengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
