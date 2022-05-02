import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  drivers: any = [];

  constructor(
    private driverService: DriverService,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDrivers().snapshotChanges().subscribe((snapshot: any) => {

      if (snapshot != null) {
        this.drivers = [];
        snapshot.forEach(snap => this.drivers.push({ key: snap.key, ...snap.payload.val() }));
        this.drivers = this.drivers.reverse();
      }
      
    });
  }

  delete(key) {
    this.driverService.deleteDriver(key).then(data => {
      this.common.showToast("Deleted");
    }).catch(err => this.common.showLoader());
  }

  changeStatus(key, status) {
    status = !status;
    this.driverService.updateDriver(key, { isApproved: status }).then(() => {
      this.common.showToast("Updated");
    }).catch(err => this.common.showToast("error"))
  }
}
