import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import {AddPage} from'../add/add';
import {BccPage} from'../bcc/bcc';

/**
 * Generated class for the DessertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dessert',
  templateUrl: 'dessert.html',
})
export class DessertPage {

  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private platform: Platform,
     private zone: NgZone,
     private modalCtrl: ModalController
     ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThaiPage');
  } 
  Addpage(){
    this.navCtrl.push(AddPage);

  }
  Bccpage(){
    this.navCtrl.push(BccPage);
  }
}