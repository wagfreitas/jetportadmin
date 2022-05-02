import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addcar',
    loadChildren: () => import('./addcar/addcar.module').then(m => m.AddcarPageModule)
  },
  {
    path: 'editcar/:id',
    loadChildren: () => import('./addcar/addcar.module').then(m => m.AddcarPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsPageModule)
  },
  {
    path: 'driverinfo/:id',
    loadChildren: () => import('./driverinfo/driverinfo.module').then(m => m.DriverinfoPageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'passengerinfo/:id',
    loadChildren: () => import('./passengerinfo/passengerinfo.module').then(m => m.PassengerinfoPageModule)
  },
  {
    path: 'passengers',
    loadChildren: () => import('./passengers/passengers.module').then(m => m.PassengersPageModule)
  },
  {
    path: 'promos',
    loadChildren: () => import('./promos/promos.module').then(m => m.PromosPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./trips/trips.module').then(m => m.TripsPageModule)
  },
  {
    path: 'withdraws',
    loadChildren: () => import('./withdraws/withdraws.module').then(m => m.WithdrawsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
