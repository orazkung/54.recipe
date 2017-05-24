import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { DessertPage} from '../dessert/dessert';
import { ForeignPage} from '../foreign/foreign';
import { ThaiPage} from '../thai/thai';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController,private viewCtrl: ViewController) { }

  ThaiPage(){this.navCtrl.push(ThaiPage);}
  ForeignPage(){this.navCtrl.push(ForeignPage);}
  DessertPage(){this.navCtrl.push(DessertPage);}
}
