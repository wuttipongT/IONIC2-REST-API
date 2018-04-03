import { Component, ViewChild, ViewChildren, ElementRef,Renderer, Directive, NgModule, Injectable, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageModule, Events, LoadingController, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Qi1041Provider } from '../../../../providers/qi1041/qi1041';
import { PlatformLocation  } from '@angular/common';
/**
 * Generated class for the Qi1041Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Injectable()
export class BazService{
  public id:string = '';
  constructor(){}

  get(){
    return this.id;
  }

  set(value){
    this.id = value;
  }

  destroy(){
    this.id = '';
  }
}

 @Component({
  selector: 'tab1',
  template: `
  <ion-content padding-top>
    <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>
    <form [formGroup]="todo" #fname> <!--(ngSubmit)="logForm()"-->
      <ion-list no-lines>

        <ion-item>
            <ion-label stacked>ORDNO</ion-label>
            <ion-input formControlName="ORDNO" type="text" (keydown)="orderKeydown($event)" #order></ion-input> <!--formControlName="firstName""-->
        </ion-item>

        <ion-item>
            <ion-label stacked>PART</ion-label>
            <ion-input formControlName="PART" type="text" #part (keydown)="partKeydown($event)"></ion-input>
        </ion-item>

        <ion-item-group>
          <ion-item-divider color="light">FAI Verified</ion-item-divider>
          <ion-item>
            <ion-label>Select</ion-label>
            <ion-select formControlName="STATUS">
              <ion-option value="OK">OK</ion-option>
              <ion-option value="NG">NG</ion-option>
            </ion-select>
          </ion-item>
        </ion-item-group>
      </ion-list>

    <div text-center>
      <button ion-button large (click)="logForm()" [disabled]="!todo.valid">Verified</button>
    </div>

    </form>
    <pre>
    {{dataTest | json}}
    </pre>
  </ion-content>`,
})
export class Tab1 {

  @ViewChild('order') order;
  @ViewChild('part') part;
  @ViewChild('fname') fname;

  private todo: FormGroup;
  submitAttempt: boolean = false;
  id:any = {};
  dataTest:any;
  constructor(private formBuilder: FormBuilder,
  private _elementRef : ElementRef,
  private renderer: Renderer,
  private navParams: NavParams,
  private events: Events,
  private fooQi: Qi1041Provider,
  private alertCtrl: AlertController){
    this.todo = this.formBuilder.group({
      ORDNO: ['', Validators.required],
      PART: ['', Validators.required],
      STATUS: ['', Validators.required],
    });
  }

  logForm(){
    console.log(this.todo.value);
  }

  orderKeydown(event){
    if(event.keyCode == 13){
      if(!this.todo.controls['ORDNO'].valid){
        return;
      }
      let order = this.todo.value.ORDNO;
      this.events.publish('tab:info', order);
      this.id = {id: order};
      this.part.setFocus();
    }
  }

  partKeydown(event){
    if(event.keyCode == 13){
      if(!this.todo.controls['PART'].valid || !this.todo.controls['ORDNO'].valid){
        return;
      }
      let box = {
        order: this.todo.value.ORDNO,
        part: this.todo.value.PART
      }
      let that = this;
      this.fooQi.hasPart(box).then( data => {
        // this.dataTest = data;
        if(Object.keys(data).length === 0){
          let alert = this.alertCtrl.create({
            title: 'Infomation !!',
            subTitle: 'Data not found !!',
            buttons: ['OK']
          });
          alert.present();
          return;
        }
        that.events.publish('on:change', data);
      } );
    }
  }
  ngAfterViewInit(){
    // console.log(this.vc.nativeElement);
      // this._elementRef.nativeElement.querySelector('input:first-child').focus();
      // this.renderer.invokeElementMethod(this.vc.nativeElement,'focus');
  }

  ionViewDidLoad() {

    // setTimeout(() => {
    //   this.order.setFocus();
    // },200);

  }

  ngOnDestroy(): void{

  }
//
}

@Component({
 template: `
 <ion-content padding-top>
 <form novalidate>
   <ion-list>
     <ion-item>
         <ion-label stacked>Customer Order</ion-label>
         <ion-input type="text" value="{{info.QST10_JOBORDER}}" disabled></ion-input>
     </ion-item>
     <ion-item>
         <ion-label stacked>Model</ion-label>
         <ion-input type="text" value="{{info.QST10_MODEL}}" disabled></ion-input>
     </ion-item>

     <ion-item>
         <ion-label stacked>Lot qty</ion-label>
         <ion-input type="text" value="{{info.QST10_LOTQTY}}" disabled></ion-input>
     </ion-item>

     <ion-item>
         <ion-label stacked>Bom version</ion-label>
         <ion-input type="text" value="{{info.QST10_BOMVER}}" disabled></ion-input>
     </ion-item>
     <ion-item>
         <ion-label stacked>Final start</ion-label>
         <ion-input type="text" value="{{info.QST10_FSDATE}}" disabled></ion-input>
     </ion-item>
  </ion-list>
 </form>
 </ion-content>`,
 // providers:[Qi1041Provider]
})
export class Tab2 {
  info:Object = {};
  constructor(private navParams: NavParams,
              private events: Events,
              private fooQi: Qi1041Provider,
              private fooBaz: BazService,
              private alertCtrl: AlertController){
    events.subscribe('tab:info', data => this.load(data) );
    // this.form = this.initForm();
  }

  public load(id:string){
    // this.oName = JSON.stringify(this.fooBaz);
    this.fooBaz.set(id);
    this.fooQi.info(id).then( data => {
      if(Object.keys(data).length === 0){
        let alert = this.alertCtrl.create({
          title: 'Infomation !!',
          subTitle: 'Data not found !!',
          buttons: ['OK']
        });
        alert.present();
        return;
      }
      this.info = data;
      this.events.publish('tab:item', id);
    } );

  }
  // initForm(): FormGroup {
  //   this.firstNameCtrl = this.formBuilder.control('', [Validators.required]);
  //   // this.lastNameCtrl = this.formBuilder.control('', [Validators.required]);
  //
  //   return this.formBuilder.group({
  //       firstName: this.firstNameCtrl,
  //       // lastName: this.lastNameCtrl
  //   });
  // }
}

@Component({
 template: `
 <ion-content>
   <ion-list>

     <ion-item-sliding *ngFor="let item of items">
      <ion-item color="{{item.COLOR}}">
        <h2>{{item.QST11_PARTCD}}</h2>
        <h3>{{item.QST22_PARTNM}}</h3>
        <p>{{item.QST11_REQQTY}}</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-start>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
      </ion-item-options>
    </ion-item-sliding>
    <ion-item *ngIf="!items" text-center>No Item</ion-item>
   </ion-list>
 </ion-content>`,
 // providers:[Qi1041Provider]
})
export class Tab3 {
  selectedItem: any;
  icons: string[];
  items:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events,
              private fooQi: Qi1041Provider,
              public loadingCtrl: LoadingController,
              private fooBaz: BazService) {
    let id = fooBaz.get();
    if(id)
      this.load(id);

    this.events.subscribe('tab:item', data => this.load(data) );
    this.events.subscribe('on:change', data => this.setColor(data) );

  }

  load(id:string){
    let that = this;
    this.fooQi.listData(id).then( data => {
      that.items = data;
      this.fooBaz.destroy();
    } );

  }

  setColor(data:any){
    let indx = this.items.findIndex( res => res.QST11_PARTCD == data[0].QST11_PARTCD );
    this.items[indx].COLOR = 'royal';
  }

}

@IonicPage()
@Component({
  selector: 'page-qi1041',
  templateUrl: 'qi1041.html',
  // providers:[BazService],
})
export class Qi1041Page {
  tab1: any = Tab1;
  tab2: any = Tab2;
  tab3: any = Tab3;
  id:any = {id: 'test'};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private superTabsCtrl: SuperTabsController,
              private fooBaz:BazService,
              private events: Events,
              private location: PlatformLocation
            ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qi1041Page');
  }

  ngAfterViewInit() {
    // must wait for AfterViewInit if you want to modify the tabs instantly
    // this.superTabsCtrl.setBadge('homeTab', 3);

  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(ev: any) {
    // console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {

  }

  // ngOnInit(): void{
  //   alert('ngOnInit');
  // }

  ngOnDestroy(): void{
    this.events.unsubscribe('tab:info');
    this.events.unsubscribe('tab:item');
  }
}
