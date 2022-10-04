import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  selectedIndex: number = 0;
  languages = [
    {
      id: 1,
      name: 'English',
      value: 'en'
    },
    {
      id: 2,
      name: 'Монгол',
      value: 'mo'
    },
  ];
  languageChoosen:string = '';
  constructor(private navCtrl: NavController,
    private translate: TranslateService) { }

  ngOnInit() {
    var lang = localStorage.getItem('language');
    console.log(lang);
    if(lang == 'mo'){
      this.selectedIndex = 1;
    }else{
      this.selectedIndex = 0;
    }
    this.translate.setDefaultLang(lang ? lang : 'en');
    this.languageChoosen = lang;
  }
  //Langauge Switch
  pickLang(language: any, index) {
    this.selectedIndex = index;
    this.languageChoosen = language.value;
  }
  saveChanges(){
    localStorage.setItem('language' , this.languageChoosen);
    this.translate.use(this.languageChoosen);
    this.navCtrl.back();
  }
  goBack(){
    this.navCtrl.back();
  }
}
