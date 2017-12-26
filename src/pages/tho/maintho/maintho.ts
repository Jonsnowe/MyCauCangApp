import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainthoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintho',
  templateUrl: 'maintho.html',
})
export class MainthoPage {
  rootPage: string = 'HomethoPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainthoPage');
  }

  logOut() {
    this.navCtrl.setRoot('LoginPage');
    console.log("logout")
  }
}
