import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DessertPage} from '../dessert/dessert';
import { ThaiPage} from '../thai/thai';
import { MacPage} from '../mac/mac';
import { GwpPage} from '../gwp/gwp';
import {AddPage} from'../add/add';
/**
 * Generated class for the ForeignPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-foreign',
  templateUrl: 'foreign.html',
})
export class ForeignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForeignPage');
  }

  Macpage(){
    this.navCtrl.push(MacPage);
  }
  Gwppage(){
    this.navCtrl.push(GwpPage);
  }
  Addpage(){
    this.navCtrl.push(AddPage);

  }  
}
