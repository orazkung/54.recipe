import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DessertPage} from '../dessert/dessert';
import { ForeignPage} from '../foreign/foreign';
import {TykPage} from '../tyk/tyk';
import {SfsfPage} from '../sfsf/sfsf';
import { SfobPage } from '../sfob/sfob';
import {AddPage} from'../add/add';



/**
 * Generated class for the ThaiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-thai',
  templateUrl: 'thai.html',
})
export class ThaiPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThaiPage');
  }
  Tykpage(){
    this.navCtrl.push(TykPage);
  }
  Sfsfpage(){
    this.navCtrl.push(SfsfPage);
  }
  Sfobpage(){
    this.navCtrl.push(SfobPage);
  }
  Addpage(){
    this.navCtrl.push(AddPage);

  }
}
