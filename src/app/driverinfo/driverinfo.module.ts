import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverinfoPageRoutingModule } from './driverinfo-routing.module';

import { DriverinfoPage } from './driverinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverinfoPageRoutingModule
  ],
  declarations: [DriverinfoPage]
})
export class DriverinfoPageModule {}
