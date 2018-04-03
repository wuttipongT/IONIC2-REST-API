import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Qi1041Provider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Qi1041Provider {

  private url:string = 'http://books.dev';
  constructor(public http: Http) {
    console.log('Hello Qi1041Provider Provider');
  }

  info(id:string = ''){

    return new Promise( resolve => {
      this.http.get(`${this.url}/api/1041/info/${id}`)
      .map( res => res.json() )
      .subscribe( data => {
        resolve(data);
      } );
    } );

  }

  listData(id:string){
    return new Promise( resolve => {
      this.http.get(`${this.url}/api/1041/list/${id}`)
      .map( res => res.json() )
      .subscribe( data => resolve(data) );
    } );
  }

  hasPart(obj:any){
    return new Promise( resolve => {
      this.http.get(`${this.url}/api/1041/has/${obj.order}/${obj.part}`)
      .map( res => res.json() )
      .subscribe( data => resolve(data) );
    } );
  }

}
