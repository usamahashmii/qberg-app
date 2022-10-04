import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MainmenuPage } from '../mainmenu/mainmenu.page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}
  async menuBtn(){
    const popover = await this.popoverController.create({
      component: MainmenuPage,
      cssClass: 'main-menu',
      // backdropDismiss: true,
      // event: ev,
      translucent: false
    });
    return await popover.present();
  }
}
