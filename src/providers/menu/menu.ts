import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuProvider {
  data: Array<{SECTION: string, MENU: string, COMPONENT: string}>;
  constructor(public http: Http) {
    console.log('Hello MenuServiceProvider Provider');
  }

  load(id){

    return new Promise( resolve => {
      this.http.get(`http://books.dev/api/menu/${id}`)
        .map( res => res.json() )
        .subscribe( data => {
          this.data = data;
          resolve(this.data);
        } );
    } );

  }

}
