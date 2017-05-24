import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import {EditPage} from'../edit/edit';

/**
 * Generated class for the TykPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tyk',
  templateUrl: 'tyk.html',
})
export class TykPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TykPage');
  }
  ShowAlert(){
    let confirm = this.alerCtrl.create({
      title: 'Delete this recipe?',
      message: 'Are you sure to delete the selected recipe ?',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree');
            this.navCtrl.pop();
          }
         
        },
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree ');
          }
        }
      ]
    });
    confirm.present()
  }
  Editpage(){
    this.navCtrl.push(EditPage);
  }
}

