import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  commentsArray: Array<any> = [];
  profileInfo: any = {};

  commmentInput: string = '';
  constructor(private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private dataService: DataService) { }

  ngOnInit() {
    //Get profile data
    this.profileInfo = this.dataService.getProfileInfo();
    //Get comments
    this.commentsArray = this.dataService.commentsArray;
  }
  close(){
    this.modalCtrl.dismiss();
  }
  async reportComment(){
    
    let alert = await this.alertCtrl.create({
      subHeader: 'Report comment?',
      cssClass: 'report-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Report',
          role: 'ok',
          handler: () => {
            console.log('ok');
          }
        }
      ]
    });
    alert.present();
  }
  postComment(){
    if(this.commmentInput && this.commmentInput != ''){
      var comment = {
        id: 1,
        img: this.profileInfo.image_url,
        name: this.profileInfo.name,
        comment: this.commmentInput,
        created_at: '2022-06-13T10:09:07.000000Z'
      }
      this.commentsArray.unshift(comment);
      this.commmentInput = '';
    }
  }
}
