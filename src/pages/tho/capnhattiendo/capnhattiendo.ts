import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-capnhattiendo',
  templateUrl: 'capnhattiendo.html',
})
export class CapnhattiendoPage {
  private capnhatForm: FormGroup;
  public xecansuas:any[];
  public photos:any;
  constructor(private formBuilder: FormBuilder,) {
    this.photos=[];
    this.capnhatForm = this.formBuilder.group({
      xe: [null, Validators.required],
      tiendo: [null, Validators.required],
      ghichu:[null]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapnhattiendoPage');
    this.xecansuas=[
      {
        idxe:1,
        loaixe:'Xe a',
        bienso:'16h-5538'
      },
      {
        idxe:2,
        loaixe:'Xe v',
        bienso:'16h-5538'
      },
      {
        idxe:3,
        loaixe:'Xe c',
        bienso:'16h-5538'
      }
    ];
  }
  takePhoto(){
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,//dataurl
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64:
    //   this.base64Image = 'data:image/jpeg;base64,' + imageData;
    //   this.photos.push(this.base64Image);
    //   this.photos.reverse();
    // }, (err) => {
    //  // Handle error
    // });
    console.log("take photo")
  }
  
  deletePhoto(index){
  //  this.photos.splice(index,1)
  console.log("delete photo")
  }

  submitForm(){
    console.log(this.capnhatForm.value)
  }

}
