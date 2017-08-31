import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../tabs/tabs';
import {SettingsPage} from '../pages/settings/settings';
import {QuotesPage} from '../pages/quotes/quotes';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabspage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

