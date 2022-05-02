import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DriverService } from '../services/driver.service';
import { TripsService } from '../services/trips.service';
import { TransactionsService } from '../services/transactions.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.page.html',
  styleUrls: ['./driverinfo.page.scss'],
})
export class DriverinfoPage implements OnInit {
  key: any;
  driver: any = {};
  tabs: any = 'carinfo';
  trips: any = [];
  records: any = [];

  constructor(
    private route: ActivatedRoute,
    private driverService: DriverService,
    private tripService: TripsService,
    private transactionService: TransactionsService,
    private cs: CommonService,
  ) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('id')
    this.getDriverInfo();
  }

  getDriverInfo() {
    this.driverService.getDriver(this.key).valueChanges().subscribe(snapshot => {
      console.log(snapshot)
      if (snapshot != null)
        this.driver = snapshot;
    })
  }

  getTrips() {
    this.tripService.getDriverTrips(this.key).valueChanges().subscribe((snap: any) => {
      console.log(snap);
      if (snap != null) {
        this.trips = snap;
      }
    })
  }

  getWallet() {
    this.transactionService.getDriverTransaction(this.key).valueChanges().subscribe((snap: any) => {
      console.log(snap);
      if(snap != null)
        this.records = snap
    })
  }

  update(){
    this.driverService.updateDriver(this.key, this.driver).then(()=>{
      this.cs.showToast("Updated")
    })
  }
}
