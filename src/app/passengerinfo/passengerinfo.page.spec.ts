import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassengerinfoPage } from './passengerinfo.page';

describe('PassengerinfoPage', () => {
  let component: PassengerinfoPage;
  let fixture: ComponentFixture<PassengerinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassengerinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
