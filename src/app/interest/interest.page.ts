import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {

  interestTopic = [
    {
      id: 1,
      name: 'Sports'
    },
    {
      id: 2,
      name: 'Autos'
    },
    {
      id: 3,
      name: 'Beauty & Fitness'
    },
    {
      id: 4,
      name: 'Literature'
    },
    {
      id: 5,
      name: 'Business'
    },
    {
      id: 6,
      name: 'Tech'
    },
    {
      id: 7,
      name: 'Lifestyle'
    },
    {
      id: 8,
      name: 'Gaming'
    },
    {
      id: 9,
      name: 'Polictics'
    },
    {
      id: 10,
      name: 'Society'
    },
    {
      id: 11,
      name: 'Science'
    },
    {
      id: 12,
      name: 'Shopping'
    },
    {
      id: 13,
      name: 'Weather'
    },
    {
      id: 14,
      name: 'Health'
    },
    {
      id: 14,
      name: 'Entertainment'
    },
  ];
  topicArray: Array<any> = [];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  addTopic(topic, index){
    this.topicArray.push(topic);
    this.interestTopic.splice(index, 1);
  }
  removeTopic(topic, index){
    this.interestTopic.push(topic);
    this.topicArray.splice(index , 1);
  }
  //Go To Notification Page
  goToNotificationsPage(){
    this.navCtrl.navigateForward('/notification');
  }
}
