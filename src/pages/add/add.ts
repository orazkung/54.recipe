import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController  } from 'ionic-angular';


/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Adding..',
      duration: 1000,
      dismissOnPageChange: true
    }).present();
    this.navCtrl.pop();
  }

}
