import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverinfoPage } from './driverinfo.page';

describe('DriverinfoPage', () => {
  let component: DriverinfoPage;
  let fixture: ComponentFixture<DriverinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
