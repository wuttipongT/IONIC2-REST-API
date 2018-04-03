import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { RoutePage } from '../../pages/route/route';
/**
 * Generated class for the PreparationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  groupedMenus = [];
  classes = {
    '404': NotFoundPage
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuProvider: MenuProvider,
              public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.menuProvider.load(7)
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
    console.log('ionViewDidLoad PreparationPage');
  }

}
