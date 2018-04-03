import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { RoutePage } from '../../pages/route/route';
import { Qi1041Page } from '../../pages/tests/component/qi1041/qi1041';
 /**
 * Generated class for the PreparationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {

  groupedMenus = [];
  classes = {
    //'404': NotFoundPage
    'QI1041' : Qi1041Page
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuProvider: MenuProvider,
              public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.menuProvider.load(8)
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
        currentMenus.push({name: value.NAME, component: this.classes[value.COMPONENT]});
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
