import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.page.html',
  styleUrls: ['./editimage.page.scss'],
})
export class EditimagePage implements OnInit {

  storyImage: any;

  myImage = null;
  
  constructor(private navParams: NavParams,
    private modalCtrl: ModalController,
    private toastService: ToastService) {
    }

  ngOnInit() {
    this.storyImage = this.navParams.get('image');
    // this.route.queryParams.subscribe(params => {
    //   console.log(params.navigationparams);
    //   this.storyImage = params.navigationparams;

      this.storyImage = (<any>window).Ionic.WebView.convertFileSrc(this.storyImage);
      console.log(this.storyImage);
    // });
    // var copyPath = this.storyImage;
    // var splitPath = copyPath.split('/');
    // var imageName = splitPath[splitPath.length - 1];
    // var filePath = this.storyImage.split(imageName)[0];
    // this.file.readAsDataURL(filePath, imageName).then(base64 => {
    //   this.myImage = base64;
    // }, error => {
    //   alert('Error in showing image' + error);
    // });
  }
  uploadStory(){
    localStorage.setItem('setStory' , this.storyImage);
    this.toastService.presentToast('Story sent successfully!');
    let data = { 'storyContent': this.storyImage };
    this.modalCtrl.dismiss({
      'dismissed': true,
      data: data
    });
  }
  dismissModel(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      data: null
    });
  }
}

