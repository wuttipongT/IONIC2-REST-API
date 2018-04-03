import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { HomePage } from '../../pages/home/home';
import { SettingsPage } from '../../pages/settings/settings';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dialogs: Dialogs,
              private nav: Nav) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clicked(event){
    event.preventDefault();
    this.nav.setRoot(SettingsPage);
    this.dialogs.alert('Hello world')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
    // this.dialogs.alert('Hello world');

  }

}
