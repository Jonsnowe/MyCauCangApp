import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  rootPage: string = 'HomePage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  logOut() {
    this.navCtrl.setRoot('LoginPage');
    console.log("logout")
  }
  // gotoPage(index) {
  //   switch (index) {
  //     case 0:
  //     this.navCtrl.parent.select(2);
  //       break;
  //     case 1:
  //     this.navCtrl.setRoot('HomePage',{activeTab:1});
  //       break;
  //     case 2:
  //     this.navCtrl.setRoot('HomePage',{activeTab:2});
  //       break;
  //     default: 0;
  //   }
  // }
}
