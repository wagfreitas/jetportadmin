import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverinfoPage } from './driverinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DriverinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverinfoPageRoutingModule {}
