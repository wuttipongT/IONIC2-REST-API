import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { PreparationPage } from '../pages/preparation/preparation';
import { MaterialPage } from '../pages/material/material';
import { SmtPage } from '../pages/smt/smt';
import { AssemblyPage } from '../pages/assembly/assembly';
import { ShippingPage } from '../pages/shipping/shipping';
import { InventoryPage } from '../pages/inventory/inventory';
import { TestsPage } from '../pages/tests/tests';
import { ReportsPage } from '../pages/reports/reports';

import { PartialHomePage } from "../pages/partial-home/partial-home";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Setting', icon:'settings', component: SettingsPage},
      { title: 'Preparation', icon:'construct', component: PreparationPage},
      { title: 'Material', icon:'cube', component: MaterialPage},
      { title: 'SMT', icon:'swap', component: SmtPage},
      { title: 'Assembly', icon:'build', component: AssemblyPage},
      { title: 'Shipping', icon:'cart', component: ShippingPage},
      { title: 'Inventoty', icon:'archive', component: InventoryPage},
      { title: 'Tests', icon:'hammer', component: TestsPage},
      { title: 'Reports', icon:'send', component: ReportsPage},
      // { title: 'Partial Home', icon:'send', component: PartialHomePage},
      // { title: 'Logout', component: LoginPage},
      // { title: 'Login', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#3949AB');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.nav.setRoot(LoginPage);
  }
}
