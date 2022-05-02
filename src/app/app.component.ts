import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from './services/common.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Técnicos',
      url: '/drivers',
      icon: 'car'
    },
    {
      title: 'Clientes',
      url: '/passengers',
      icon: 'people'
    },
    {
      title: 'Atendimentos',
      url: '/trips',
      icon: 'compass'
    },
   
    {
      title: 'Notificações',
      url: '/notifications',
      icon: 'notifications'
    },
    
    {
      title: 'Configurações',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private common: CommonService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.afAuth.onAuthStateChanged(auth => {
      console.log(auth);
      if (auth == null) {
        this.router.navigateByUrl('/login');
        this.menuCtrl.enable(false)
      }
      else {
        if (auth.email == environment.adminEmail) {
          this.router.navigateByUrl('/home');
          this.menuCtrl.enable(true);

          // validating settings
          this.db.object("master_settings").snapshotChanges().pipe(take(1)).subscribe((obj) => {
            console.log(obj.payload.exists());
            if (!obj.payload.exists()) {
              this.db.object("master_settings").set(environment.defaultCarSettings);
            }
          });
          this.db.object("settings").snapshotChanges().pipe(take(1)).subscribe((obj) => {
            if (!obj.payload.exists()) {
              this.db.object("settings").set(environment.defaultSettings);
            }
          });
        }
        else {
          this.common.showToast("Not an admin!")
          this.logout();
        }
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.afAuth.signOut()
  }
  ngOnInit() { }
}
