import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tab1Root = 'VandonPage';
  tab2Root = 'BaohuPage';
  tab3Root = 'ThongkePage';

  constructor() {
    // this.navParams.get('activeTab')
  }
  // ionViewDidEnter() {
  //   this.tabRef.select(this.navParams.get('activeTab'));
  //  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  

}
