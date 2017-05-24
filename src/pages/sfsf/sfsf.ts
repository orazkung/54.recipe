import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the SfsfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sfsf',
  templateUrl: 'sfsf.html',
})
export class SfsfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SfsfPage');
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
}
