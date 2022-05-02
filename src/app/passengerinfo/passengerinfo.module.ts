import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerinfoPageRoutingModule } from './passengerinfo-routing.module';

import { PassengerinfoPage } from './passengerinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerinfoPageRoutingModule
  ],
  declarations: [PassengerinfoPage]
})
export class PassengerinfoPageModule {}
