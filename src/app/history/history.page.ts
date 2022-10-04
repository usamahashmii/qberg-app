import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  histroyData = [
    {id: 1,
    date: 'Today',
    searchData: [
      {text: 't20 world cup 2021',
      time: '10:02AM',
      url: ''
    },
    {text: 'top news',
      time: '01:40AM',
      url: ''
    },
    ],
    },
    {id: 2,
      date: 'Yesterday',
      searchData: [
        {text: 'Roblox',
        time: '09:15AM',
        url: ''
      },
      {text: 'Simulation',
        time: '07:20PM',
        url: ''
      },
      ],
    },
    {id: 1,
      date: 'Today',
      searchData: [
        {text: 't20 world cup 2021',
        time: '10:02AM',
        url: ''
      },
      {text: 'top news',
        time: '01:40AM',
        url: ''
      },
      ],
      },
      {id: 3,
        date: '2022-01-08',
        searchData: [
          {text: 'weather',
          time: '09:15AM',
          url: ''
        },
        {text: 'Shopping',
          time: '07:20PM',
          url: ''
        },
        {text: 'Windows working',
          time: '07:20PM',
          url: ''
        },
        ],
      },
  ]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
}
