import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-vandon',
  templateUrl: 'vandon.html',
})
export class VandonPage {

  public coHang: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
    this.coHang = true;//có hàng
  }

  ionViewWillEnter() {
    this.storage.get('danhanhang').then((val) => console.log(val))// thằng này sẽ cập nhật từ sever
    console.log('ionViewWillEnter VandonPage');
    if (this.navParams.get('coHang') != null) {
      this.coHang = this.navParams.get('coHang');
    }
  }

  ionViewDidLoad() {
    // this.navCtrl.canGoBack;//?
    console.log('ionViewDidLoad VandonPage');
  }


  NhanHang() {
    // this.navCtrl.push('VanchuyenPage'); 
    new Promise((resolve, reject) => {
      this.navCtrl.push('VanchuyenPage', { nhanhangtiep: resolve });//trả về data-> true:nhận tiếp/ false: không nhận tiếp
    }).then(data => {
      if(data==true){
        this.coHang=true;
      }else{
        this.coHang=false;
      }
    });
    
    // const mymodal_: Modal = this.modal.create('VanchuyenPage');
    // mymodal_.present();
    this.storage.set('danhanhang', true);//nhận hàng thì sẽ set true
  }



}
