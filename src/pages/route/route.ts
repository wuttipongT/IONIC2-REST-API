import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformLocation } from '@angular/common'
/**
 * Generated class for the RoutePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  page;
  rootPage;
  constructor(params: NavParams,private location: PlatformLocation) {
    this.page = params.data.page;
    this.rootPage = this.page.component;

    this.location.onPopState(()=>{
      alert('ok');
      console.log('Back button pressed');
    });
  }
  // @HostListener('window:unload', ['$event'])
  // unloadHandler(event) {
  //   alert('ok');
  // }
  // @HostListener('window:popstate', ['$event'])
  // onPopState(event) {
  //   console.log('Back button pressed');
  // }
}
