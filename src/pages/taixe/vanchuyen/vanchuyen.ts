import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-vanchuyen',
  templateUrl: 'vanchuyen.html',
})
export class VanchuyenPage {
  textState: string;
  state: number;
  canleave: boolean = false;
  isClick: boolean;
  isketthuc: boolean;
  state1: string;
  state2: string;
  state3: string;
  state4: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public modal: ModalController,
    private viewCtrl: ViewController) {
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VanchuyenPage');
    this.isClick = false;// set button chưa click
    this.storage.get('danhanhang').then((val) => {
      if (!val) {//nếu danhanhang là false-> chưa nhận hàng
        this.canleave = true;
        this.isketthuc = false;//chưa kết thúc
      }
    })
    this.state = 1;
    this.textState = "Đang chờ";
  }

  ionViewCanLeave() {
    if (this.canleave == true) {
      return true//có thể quay lại
    } else {
      return false // không thể quay lại  
    }
  }


  State() {
    console.log(this.state)
    this.isClick = true;//đã click-> không cho click típ
    switch (this.state) {
      case 1:
        const mymodal_diemden: Modal = this.modal.create('DiemdenmodalPage');
        mymodal_diemden.present();
        mymodal_diemden.onDidDismiss(() => {
          this.isClick = false;//cho click típ
          this.state++;//state 2
          this.textState = "Lên hàng";
        })
        break;
      case 2:
        const mymodal: Modal = this.modal.create('LenhangmodalPage');
        mymodal.present();
        mymodal.onDidDismiss(() => {
          this.isClick = false;
          this.state++;
          this.textState = "Di chuyển";
        })
        break;
      case 3:
        const mymodal_: Modal = this.modal.create('DiemketthucmodalPage');
        mymodal_.present();
        mymodal_.onDidDismiss(() => {
          this.isClick = false;
          this.state++;
          this.textState = "Xuống hàng";
        })
        break;
      case 4:
        this.isClick = false;
        this.isketthuc = true;//đã kết thúc
        this.textState = "Tiếp tục";
        this.state++;//state 5
        break;
      case 5:
        this.canleave = true;
        this.navCtrl.pop();
        this.navParams.get('nhanhangtiep')(true);
        break;
    }
  }
  kethuc(){
    this.canleave = true;
    this.navCtrl.pop();
    this.navParams.get('nhanhangtiep')(false);
  }

}
