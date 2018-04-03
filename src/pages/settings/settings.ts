import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { Ci1510Page } from '../settings/component/ci1510/ci1510';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { RoutePage } from '../../pages/route/route';
/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers:[MenuProvider]
})
export class SettingsPage {

  groupedMenus = [];
  classes = {
    'CI1510' : Ci1510Page,
    '404': NotFoundPage
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuService: MenuProvider,
              public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.menuService.load(1)
      .then( data => {
        this.groupMenu(data);
        loading.dismiss();
      } );
  }

  groupMenu(menu){
    let currentLetter = false;
    let currentMenus = [];
    menu.forEach( (value, indx) => {
      if(value.SECTION != currentLetter){
        currentLetter = value.SECTION;

        let newGroup = {
          letter: currentLetter,
          menus: []
        }
        currentMenus = newGroup.menus;
        this.groupedMenus.push(newGroup);
      }

      if( !(value.COMPONENT in this.classes) ){
        currentMenus.push({name: value.NAME, component: NotFoundPage});
      }else{
        currentMenus.push({name: value.NAME, component: this.classes[value.component]});
      }

    } );
  }

  openNavDetailsPage(page) {
     this.navCtrl.push(RoutePage, { page: page });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
