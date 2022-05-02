import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerinfoPage } from './passengerinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerinfoPageRoutingModule {}
