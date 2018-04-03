import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { NotFoundPage } from '../pages/not-found/not-found';
import { RoutePage } from '../pages/route/route';
import { PreparationPage } from '../pages/preparation/preparation';
import { MaterialPage } from '../pages/material/material';

import { SmtPage } from '../pages/smt/smt';
import { AssemblyPage } from '../pages/assembly/assembly';
import { ShippingPage } from '../pages/shipping/shipping';
import { InventoryPage } from '../pages/inventory/inventory';
import { TestsPage } from '../pages/tests/tests';
import { ReportsPage } from '../pages/reports/reports';

import { Ci1510Page } from '../pages/settings/component/ci1510/ci1510';
import { Qi1041Page } from '../pages/tests/component/qi1041/qi1041';
import { Tab1 } from '../pages/tests/component/qi1041/qi1041';
import { Tab2 } from '../pages/tests/component/qi1041/qi1041';
import { Tab3 } from '../pages/tests/component/qi1041/qi1041';

import { MenuProvider } from '../providers/menu/menu';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { Qi1041Provider } from '../providers/qi1041/qi1041';
import { BazService } from '../pages/tests/component/qi1041/qi1041';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SettingsPage,
    RoutePage,
    NotFoundPage,
    PreparationPage,
    MaterialPage,
    SmtPage,
    AssemblyPage,
    ShippingPage,
    InventoryPage,
    TestsPage,
    ReportsPage,
    Qi1041Page,
    Ci1510Page,
    Tab1,
    Tab2,
    Tab3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SettingsPage,
    RoutePage,
    NotFoundPage,
    PreparationPage,
    MaterialPage,
    SmtPage,
    AssemblyPage,
    ShippingPage,
    InventoryPage,
    TestsPage,
    ReportsPage,
    Qi1041Page,
    Ci1510Page,
    Tab1,
    Tab2,
    Tab3,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Dialogs,
    MenuProvider,
    Qi1041Provider,
    BazService
  ]
})
export class AppModule {}
