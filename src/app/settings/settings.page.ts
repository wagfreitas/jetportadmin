import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: any = {};

  constructor(
    private db: AngularFireDatabase,
    private cs: CommonService
  ) { }

  ngOnInit() {
    this.db.object('settings').snapshotChanges().subscribe(res => {
      console.log(res.payload.val());
      if (res.payload.val() != undefined && res.payload.val() != null) {
        this.settings = res.payload.val();
      }
    })
  }

  save() {
    this.db.object('settings').set(this.settings).then(() => {
      this.cs.showToast("Updated")
    }).catch(e => {
      this.cs.showToast("something went wrong");
    });
  }

}
