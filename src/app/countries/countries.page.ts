import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { countries } from '../shared/components/store/store';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  public countries:any = countries;
  countriesFiltered: Array<any>;
  searchValue: string = '';
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async pickCountryCode(country){
    await this.modalController.dismiss(country);
  }
  searchCountry(event){
    this.searchValue = event.detail.value;
    this.countriesFiltered = this.countries;    
    this.countriesFiltered = this.countriesFiltered.filter(function (ele, i, array) {
      let arrayelement = ele.name.toLowerCase()
      return arrayelement.includes(event.detail.value)
    });
  }
}
