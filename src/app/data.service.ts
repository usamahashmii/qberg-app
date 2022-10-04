import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Output()   // <<< has no effect

@Injectable({
  providedIn: 'root'
})
export class DataService {

  justNowArray = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80 1740w',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60 400w',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    // {
    //   id: 4,
    //   img: 'assets/imgs/tabs-page/just-now/just-now-img-4.png',
    //   desc: 'Mi-yeon as a singer, let’s meet in C4.'
    // },
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60 400w',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    // {
    //   id: 4,
    //   img: 'assets/imgs/tabs-page/just-now/just-now-img-4.png',
    //   desc: 'Mi-yeon as a singer, let’s meet in C4.'
    // },
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/H46c90dc12bc3441b909e28730affca31Q/2021-Summer-woman-sneakers-fashion-breathable-pu-leather-casual-shoes-white-platform-women-shoes-soft-footwears.jpg_Q90.jpg_.webp',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/H7afbd1264d054b239402b44f8bf49979M/Woman-Vulcanize-Shoes-Casual-Times-Vulcanize-2021-hot-sale-Summer-High-Top-Walking-Flats-Women-s.jpg_Q90.jpg_.webp',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/H7afbd1264d054b239402b44f8bf49979M/Woman-Vulcanize-Shoes-Casual-Times-Vulcanize-2021-hot-sale-Summer-High-Top-Walking-Flats-Women-s.jpg_Q90.jpg_.webp',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    // {
    //   id: 4,
    //   img: 'assets/imgs/tabs-page/just-now/just-now-img-4.png',
    //   desc: 'Mi-yeon as a singer, let’s meet in C4.'
    // },
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/H46c90dc12bc3441b909e28730affca31Q/2021-Summer-woman-sneakers-fashion-breathable-pu-leather-casual-shoes-white-platform-women-shoes-soft-footwears.jpg_Q90.jpg_.webp',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/H46c90dc12bc3441b909e28730affca31Q/2021-Summer-woman-sneakers-fashion-breathable-pu-leather-casual-shoes-white-platform-women-shoes-soft-footwears.jpg_Q90.jpg_.webp',
      desc: 'Mi-yeon as a singer, let’s meet in C4.'
    },
    // {
    //   id: 4,
    //   img: 'assets/imgs/tabs-page/just-now/just-now-img-4.png',
    //   desc: 'Mi-yeon as a singer, let’s meet in C4.'
    // },
  ];
  applicationsArray = [
    {
      applications: [
        {id: 1,
        name: 'PUBG Mobile'},
        {id: 2,
          name: 'MX Player'},
        {id: 3,
          name: 'Moovit'},
        {id: 4,
          name: 'Soul'},
        {id: 5,
          name: 'Edge'},
      ],
    },
    {
      applications: [
        {id: 1,
        name: 'Facebook'},
        {id: 2,
          name: 'Instagram'},
        {id: 3,
          name: 'Linked In'},
        {id: 4,
          name: 'Twitter'},
        {id: 5,
          name: 'Yahoo'},
      ],
    },
  ];
  scrollingCategoriesArray = [
    {id: 1, name: 'My Feed',},
    {id: 4, name: 'Popular News',},
    {id: 6, name: 'Popular Sales',},
  ];
  //News posts array
  newsPostsArray = [
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/HTB1gPx2ibPpK1RjSZFFq6y5PpXaR/Men-s-Compression-Sportswear-Suits-Gym-Tights-Training-Clothes-Workout-Jogging-Sports-Set-Running-Tracksuit-Quick.jpg_Q90.jpg_.webp',
      time: '1',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://ae01.alicdn.com/kf/H706f767ea15643629a851192b225e7e6A/Sports-Pants-Men-s-Slim-Fit-Spring-Autumn-Outdoor-Running-Pants-Nylon-Breathable-Elastic-Goggers-Casual.jpg_Q90.jpg_.webp',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://ae01.alicdn.com/kf/Hb82ca9a6a10a4de39ebbb15dc64f24daL/Men-Running-Pants-Joggers-Sweatpant-Spring-Autumn-Jogging-Sport-Trousers-Loose-Homewear-Fitness-Straight-Breathable.jpg_480x480q90.jpg_.webp',
      time: '3',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://ae01.alicdn.com/kf/Haf75a96b529448a880090988488281afM.jpg_200x200Q90.jpg_.webp',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://ae01.alicdn.com/kf/HTB18ez_dr5YBuNjSspoq6zeNFXa9/se04-OUVERT-Sexy-Sex-LED-Neon-Enseigne-Lumineuse-Wholeselling-Dropshipper.jpg_220x220xz.jpg_.webp',
      time: '4',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://ae01.alicdn.com/kf/H06256b696b284cffb742bfe86f99d3b6o/Summer-Face-Mask-Cycling-Fishing-Training-Face-Scarf-Balaclava-Windproof-Soft-Sport-Mask-Motorcycle-headgear-Cycling.jpg_220x220xz.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/H1534db264e4f41d0909c09af8ee71570s/Disney-Many-Types-16-18cm-Different-Characters-Occupation-Wrestling-Gladiators-Wrestler-Movable-Joint-Figure-Toy.jpg_Q90.jpg_.webp',
      time: '1',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://ae01.alicdn.com/kf/H391690bd94c54f45a923a7dcf1393dd1z/100-Winning-Number-Lucky-Mystery-Box-Most-Popular-High-quality-Gift-More-Precious-Item-Electronic-Products.jpg_220x220xz.jpg_.webp',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://ae01.alicdn.com/kf/He96422485e6349d9b804019c07c42647N/2021-Trends-Metal-Frame-Optical-Eyeglasses-Blue-Light-Blocking-Glasses-For-Men-Clear-Computer-Spectacles-Square.jpg_220x220xz.jpg_.webp',
      time: '3',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://ae01.alicdn.com/kf/H29ebc5d125324c52b0a4fa3ed0f503c3X/Z20Dropshipping-Squid-Game-Alarm-Clock-123-Wooden-Doll-Clock-Funny-Doll-Masked-Man-Doll-Decoration-Alarm.jpg_220x220xz.jpg_.webp',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://ae01.alicdn.com/kf/He92112153f094794926cfeeb62d72104G.jpg_640x640Q90.jpg_.webp',
      time: '4',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://ae01.alicdn.com/kf/Hd2014a25b0f941069c9a12634c3d9d03n/USB-Ambient-Star-Night-Lights-Mini-Usting-Flexible-USB-Night-Lamp-Fit-All-Cars-Ceiling-Roof.jpg_220x220xz.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/H47cba93cfddf42cea942fe6f55f76a27A/Top-Grade-New-Autum-Winter-Designer-Fashion-Brand-Luxury-Knit-Half-Turtleneck-Men-Warm-Woolen-Sweater.jpeg_Q90.jpeg_.webp',
      time: '1',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://ae01.alicdn.com/kf/U0e8b69e62d70432c86ea7028e8b51669c/Cartoon-Hello-Kitty-Watch-Girl-Hours-Children-Gift-Quartz-Baby-Wrist-Watch-Kids-Child-Brand-Clock.jpg_220x220xz.jpg_.webp',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://ae01.alicdn.com/kf/HTB10rEnm8smBKNjSZFFq6AT9VXaV/2021-New-Fashion-Brand-Sweater-Mens-Pullover-Striped-Slim-Fit-Jumpers-Knitred-Woolen-Autumn-Korean-Style.jpg_Q90.jpg_.webp',
      time: '3',
      followStatus: 'Follow'
    },
    {
      profileName: 'spanish',
      profileImg: 'https://ae01.alicdn.com/kf/H06256b696b284cffb742bfe86f99d3b6o/Summer-Face-Mask-Cycling-Fishing-Training-Face-Scarf-Balaclava-Windproof-Soft-Sport-Mask-Motorcycle-headgear-Cycling.jpg_220x220xz.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/Hff9cac06bb7641ad98ba573709294131w/Limited-Classic-Toy-Super-Movable-Wrestler-Triple-H-HHH-Pvc-Action-Figure-Toys-Clothes-and-Helmet.jpg_Q90.jpg_.webp',
      time: '10',
      followStatus: 'Follow'
    },
  ];
  covidPostsArray = [
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://nation.com.pk/digital_images/medium/2021-11-22/gold-prices-fall-rs-400-to-rs-123-400-per-tola-1637606365-2374.jpg',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://www.lung.org/getmedia/734b6b16-c411-4c9a-b9b9-da25f7b9848e/covidblue_e.jpg?width=700&height=350&ext=.jpg',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/166C8/production/_116084819_smallergettyimages-1204224469-1.jpg',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fphar-11-00937-g001.jpg/1200px-Fphar-11-00937-g001.jpg',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://cdn.downtoearth.org.in/library/large/2021-02-17/0.27304500_1613545520_covid19.jpg',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://www.orfonline.org/wp-content/uploads/2020/03/COVID-19-pandemic-1280x720.jpg',
      time: '4 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_mobile/public/UN0423400.jpg?itok=RgIwE1wE',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://news.mit.edu/sites/default/files/images/202005/covid-19-MITGOVLAB.png',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/covid-strain-hero-compressed.ashx?mw=640&mh=320&hash=BD864EA8633DBB7CDFD437B0315B8B58',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://www.healthychildren.org/SiteCollectionImagesArticleImages/be-safe.jpg?RenditionID=3',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://post.healthline.com/wp-content/uploads/2021/03/Female_Doctor_Covid_1200x628-facebook-1200x628.jpg',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://iaa-network.com/wp-content/uploads/2020/03/Covid-19-pandemic-investment-arbitration-1.jpg',
      time: '4 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://healthychildren.org/SiteCollectionImagesArticleImages/little-girl-taking-a-covid-vaccine.jpg?RenditionID=3',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://breaknlinks.s3.amazonaws.com/english/uploads/ram_1.jpg',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://media.springernature.com/full/springer-cms/rest/v1/content/19382282/data/v1',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://www.lowyinstitute.org/sites/default/files/Covid%20shots_0.jpg',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'spanish',
      profileImg: 'https://img.etimg.com/thumb/msid-75174849,width-1200,height-900/industry/healthcare/biotech/healthcare/us-companies-sharing-their-resources-to-help-india-fight-covid-19.jpg',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://www.unicef.org/sites/default/files/styles/large_tile/public/covid-19-micron-variant-UN0500155_0.jpg?itok=PxcEN3qn',
      time: '10 day ago',
      followStatus: 'Follow'
    },
  ];
  sportsPostsArray = [
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190736?b=1&k=20&m=949190736&s=170667a&w=0&h=f3ofVqhbmg2XSVOa3dqmvGtHc4VLA_rtbboRGaC8eNo=',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOrewnYLTeY8XzcRkz6YRGrAj5RDCZ9WSHw&usqp=CAU',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://www.ballerstatus.com/wp-content/uploads/2021/01/soccer-pexels-pixabay-47730.jpg',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://www.ca-sports.com.pk/images/Legend-II.jpg',
      time: '4 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_mobile/public/UN0423400.jpg?itok=RgIwE1wE',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://www.thenews.com.pk/assets/uploads/tns/2016-05-22/560993_2499777_tns.jpg',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/covid-strain-hero-compressed.ashx?mw=640&mh=320&hash=BD864EA8633DBB7CDFD437B0315B8B58',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://www.ucp.edu.pk/inc/uploads/2019/06/Sports-Club-4-1024x683.jpg',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://post.healthline.com/wp-content/uploads/2021/03/Female_Doctor_Covid_1200x628-facebook-1200x628.jpg',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://www.uws.ac.uk/media/6456/team-uws-group-image.jpg?anchor=center&mode=crop&width=830&height=585&rnd=132458583070000000&quality=80',
      time: '4 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://healthychildren.org/SiteCollectionImagesArticleImages/little-girl-taking-a-covid-vaccine.jpg?RenditionID=3',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2097735.jpeg',
      time: '1 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://media.springernature.com/full/springer-cms/rest/v1/content/19382282/data/v1',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://ceme.nust.edu.pk/wp-content/uploads/2021/07/Riding.jpg',
      time: '3 day ago',
      followStatus: 'Follow'
    },
    {
      profileName: 'spanish',
      profileImg: 'https://img.etimg.com/thumb/msid-75174849,width-1200,height-900/industry/healthcare/biotech/healthcare/us-companies-sharing-their-resources-to-help-india-fight-covid-19.jpg',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://lh3.googleusercontent.com/proxy/sYRKjvnUMfU_sPppCjQ5o17lfg9tmpwIfJkFPUJjJsucf_P98nyYTtG3rJawOcLJ1kLbFojEUUmOcwa1VF4VRZ4ETuBDaOUyCq5dXOxIDpVoreVVe0lVUw',
      time: '10 day ago',
      followStatus: 'Follow'
    },
  ];
  qpostsArray = [
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/HTB1gPx2ibPpK1RjSZFFq6y5PpXaR/Men-s-Compression-Sportswear-Suits-Gym-Tights-Training-Clothes-Workout-Jogging-Sports-Set-Running-Tracksuit-Quick.jpg_Q90.jpg_.webp',
      time: '1',
      followStatus: 'Follow'
    },
    {
      profileName: 'FreeFire',
      profileImg: 'https://ae01.alicdn.com/kf/H706f767ea15643629a851192b225e7e6A/Sports-Pants-Men-s-Slim-Fit-Spring-Autumn-Outdoor-Running-Pants-Nylon-Breathable-Elastic-Goggers-Casual.jpg_Q90.jpg_.webp',
      desc: 'Celebrations galore for Free Fire’s Booyah Day on 20 November',
      descImage: 'https://ae01.alicdn.com/kf/Hb82ca9a6a10a4de39ebbb15dc64f24daL/Men-Running-Pants-Joggers-Sweatpant-Spring-Autumn-Jogging-Sport-Trousers-Loose-Homewear-Fitness-Straight-Breathable.jpg_480x480q90.jpg_.webp',
      time: '3',
      followStatus: 'Follow'
    },
    {
      profileName: 'Spotlight',
      profileImg: 'https://ae01.alicdn.com/kf/Haf75a96b529448a880090988488281afM.jpg_200x200Q90.jpg_.webp',
      desc: 'NBA Rookie of the Year (ROTY): November 16th, 2021 | Latest Power Rankings by Sportskeeda',
      descImage: 'https://ae01.alicdn.com/kf/HTB18ez_dr5YBuNjSspoq6zeNFXa9/se04-OUVERT-Sexy-Sex-LED-Neon-Enseigne-Lumineuse-Wholeselling-Dropshipper.jpg_220x220xz.jpg_.webp',
      time: '4',
      followStatus: 'Follow'
    },
    {
      profileName: 'Sportskeeda',
      profileImg: 'https://ae01.alicdn.com/kf/H06256b696b284cffb742bfe86f99d3b6o/Summer-Face-Mask-Cycling-Fishing-Training-Face-Scarf-Balaclava-Windproof-Soft-Sport-Mask-Motorcycle-headgear-Cycling.jpg_220x220xz.jpg_.webp',
      desc: 'WWE Rumor and news roundup: 11 time champion breaks Roman Reigs Winning',
      descImage: 'https://ae01.alicdn.com/kf/H1534db264e4f41d0909c09af8ee71570s/Disney-Many-Types-16-18cm-Different-Characters-Occupation-Wrestling-Gladiators-Wrestler-Movable-Joint-Figure-Toy.jpg_Q90.jpg_.webp',
      time: '1',
      followStatus: 'Follow'
    },
  ]
  bannerArray = [
    {
      id: 1,
      img: 'assets/imgs/banner.png'
    },
    {
      id: 2,
      img: 'assets/imgs/banner2.png'
    }
  ];
  covidBannerArray = [
    {
      id: 1,
      img: 'assets/imgs/covid.jpeg'
    },
    {
      id: 2,
      img: 'assets/imgs/covid-2.jpeg'
    },
  ]
  //Category Details!!!
  scrollingCategoriesArrayCategoryDetail = [
    {id: 1, name: 'News', value: 'news'},
    {id: 2, name: 'Shopping', value: 'shopping'},
    {id: 3, name: 'Videos', value: 'videos'},
    {id: 4, name: 'Apps', value: 'apps'},
    // {id: 5, name: 'Images', value: 'images'},
    // {id: 6, name: 'Hotels', value: 'hotels'},
    // {id: 7, name: 'Flights', value: 'flights'},
    {id: 8, name: 'Images', value: 'image'},
    {id: 8, name: 'Music', value: 'music'},
  ];
  newsPartners = [
    {
      id: 1,
      img: 'assets/imgs/category-details/yahoo.png',
      name: 'Yahoo News'
    },
    {
      id: 2,
      img: 'assets/imgs/category-details/g.png',
      name: 'TheGuardian'
    },
    {
      id: 3,
      img: 'assets/imgs/category-details/earth.png',
      name: 'Reuters'
    },
    {
      id: 4,
      img: 'assets/imgs/category-details/letter-e.png',
      name: 'ESPN'
    },
    {
      id: 5,
      img: 'assets/imgs/category-details/msn.png',
      name: 'MSN'
    }
  ];
  //Shopping Products
  shoppingItems = [
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/HTB1gPx2ibPpK1RjSZFFq6y5PpXaR/Men-s-Compression-Sportswear-Suits-Gym-Tights-Training-Clothes-Workout-Jogging-Sports-Set-Running-Tracksuit-Quick.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H706f767ea15643629a851192b225e7e6A/Sports-Pants-Men-s-Slim-Fit-Spring-Autumn-Outdoor-Running-Pants-Nylon-Breathable-Elastic-Goggers-Casual.jpg_Q90.jpg_.webp'}
      ],
      desc: 'Shopping Bags Women corduroy autumn leopard chic stylish insection',
      discountPrice: 'MNT 4.99',
      originalPrice: 'MNT 5.99',
      discount: '1% off',
      seller: 'Ali Express',
      brandName: 'rosegal',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/H571e436fbd32457088087e92bf972634s/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H571e436fbd32457088087e92bf972634s/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H17bbd9e64dd0420eb3d07e25f6a7e9cez/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H61247266c3a94628b3277bf9b4fc4e6c7/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf220c05119864649a422f299a348be2b5/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'}
      ],
      desc: 'ZOGAA 2019 new 5 colors Assassin Master hoodie men\'s hooded hooded jacket men\'s hooded jacket large size S-4XL hoodie men',
      discountPrice: 'MNT 2.57',
      originalPrice: 'MNT 10.99',
      discount: '7% off',
      seller: 'Ali Express',
      brandName: 'Zalando',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/H24657a01292e43e59b8b6b9da2257327G/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H24657a01292e43e59b8b6b9da2257327G/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H3d794989f6904d3fa185b2e8af33716d3/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Ha49da5c750d34d79af4e30ba32252b24P/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'}
      ],
      desc: '5XL Men Winter New Casual Classic Warm Thick Fleece Parkas Jacket Coat Men Autumn Fashion Pockets Windproof Parka Men Plus Size',
      discountPrice: 'MNT 2.57',
      originalPrice: null,
      discount: null,
      seller: 'Ali Express',
      brandName: 'Zalando',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 4,
      img: 'https://ae01.alicdn.com/kf/H24657a01292e43e59b8b6b9da2257327G/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H4b7f3358b7bd4653b80f33b772b6f81dm/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf268628e3022449b84aed920d2a93504E/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H853ac910b13b41eaae82e51755c9c1f75/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'}
      ],
      desc: 'ZOGAA 2020 Man Wool Blends Jacket New Formal Casual 5 Color Fashion Men\'s Long Cotton Coat S-3XL mens coats and jackets',
      discountPrice: 'MNT 1.84',
      originalPrice: 'MNT 2.99',
      discount: '4% off',
      seller: 'ASOS',
      brandName: 'vidaXL',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 5,
      img: 'https://ae01.alicdn.com/kf/H75d5d7e0a051497b96129a76be72c2fbA/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H75d5d7e0a051497b96129a76be72c2fbA/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hada97a3451904effb42c19706b6c18078/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hea048a8cf9ac431e8b75efc71828bac7r/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'}
      ],
      desc: 'Zogaa Brand Men Jacket Army Green Military Wide-waisted Coat Casual Cotton Hooded Windbreaker Jackets Overcoat Male 2020 New',
      discountPrice: 'MNT 1.84',
      originalPrice: 'MNT 9.99',
      discount: '65% off',
      seller: 'Zalando',
      brandName: 'vidaXL',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 6,
      img: 'https://ae01.alicdn.com/kf/H6fe4c7fa1aae46d28138e794fd96d472I/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H6fe4c7fa1aae46d28138e794fd96d472I/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf631449459f74141916f3cb93637f4e3s/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H8ffb1fc9c6314f80843185d92f64e5a9M/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_50x50.jpg_.webp'}
      ],
      desc: '5XL Plus Men Winter New Outwear Thick Warm Parkas Jacket Coat Men Autumn Casual Windproof Pocket Detachable Hat Parka Jacket Men',
      discountPrice: 'MNT 21.04',
      originalPrice: 'MNT 30.99',
      discount: '8% off',
      seller: 'mandmdirect.ie',
      brandName: 'dresslily',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/HTB1gPx2ibPpK1RjSZFFq6y5PpXaR/Men-s-Compression-Sportswear-Suits-Gym-Tights-Training-Clothes-Workout-Jogging-Sports-Set-Running-Tracksuit-Quick.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H706f767ea15643629a851192b225e7e6A/Sports-Pants-Men-s-Slim-Fit-Spring-Autumn-Outdoor-Running-Pants-Nylon-Breathable-Elastic-Goggers-Casual.jpg_Q90.jpg_.webp'}
      ],
      desc: 'Shopping Bags Women corduroy autumn leopard chic stylish insection',
      discountPrice: 'MNT 4.99',
      originalPrice: null,
      discount: null,
      seller: 'Ali Express',
      brandName: 'rosegal',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/H571e436fbd32457088087e92bf972634s/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H571e436fbd32457088087e92bf972634s/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H17bbd9e64dd0420eb3d07e25f6a7e9cez/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H61247266c3a94628b3277bf9b4fc4e6c7/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf220c05119864649a422f299a348be2b5/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp'}
      ],
      desc: 'ZOGAA 2019 new 5 colors Assassin Master hoodie men\'s hooded hooded jacket men\'s hooded jacket large size S-4XL hoodie men',
      discountPrice: 'MNT 2.57',
      originalPrice: null,
      discount: null,
      seller: 'Ali Express',
      brandName: 'Zalando',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/H24657a01292e43e59b8b6b9da2257327G/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H24657a01292e43e59b8b6b9da2257327G/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H3d794989f6904d3fa185b2e8af33716d3/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Ha49da5c750d34d79af4e30ba32252b24P/5XL-Men-Winter-New-Casual-Classic-Warm-Thick-Fleece-Parkas-Jacket-Coat-Men-Autumn-Fashion-Pockets.jpg_Q90.jpg_.webp'}
      ],
      desc: '5XL Men Winter New Casual Classic Warm Thick Fleece Parkas Jacket Coat Men Autumn Fashion Pockets Windproof Parka Men Plus Size',
      discountPrice: 'MNT 2.57',
      originalPrice: null,
      discount: null,
      seller: 'Ali Express',
      brandName: 'Zalando',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 4,
      img: 'https://ae01.alicdn.com/kf/H4b7f3358b7bd4653b80f33b772b6f81dm/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H4b7f3358b7bd4653b80f33b772b6f81dm/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf268628e3022449b84aed920d2a93504E/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H853ac910b13b41eaae82e51755c9c1f75/ZOGAA-2020-Man-Wool-Blends-Jacket-New-Formal-Casual-5-Color-Fashion-Men-s-Long-Cotton.jpg_Q90.jpg_.webp'}
      ],
      desc: 'ZOGAA 2020 Man Wool Blends Jacket New Formal Casual 5 Color Fashion Men\'s Long Cotton Coat S-3XL mens coats and jackets',
      discountPrice: 'MNT 1.84',
      originalPrice: null,
      discount: null,
      seller: 'ASOS',
      brandName: 'vidaXL',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 5,
      img: 'https://ae01.alicdn.com/kf/H75d5d7e0a051497b96129a76be72c2fbA/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H75d5d7e0a051497b96129a76be72c2fbA/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hada97a3451904effb42c19706b6c18078/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hea048a8cf9ac431e8b75efc71828bac7r/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'}
      ],
      desc: 'Zogaa Brand Men Jacket Army Green Military Wide-waisted Coat Casual Cotton Hooded Windbreaker Jackets Overcoat Male 2020 New',
      discountPrice: 'MNT 1.84',
      originalPrice: null,
      discount: null,
      seller: 'Zalando',
      brandName: 'vidaXL',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 6,
      img: 'https://ae01.alicdn.com/kf/H6fe4c7fa1aae46d28138e794fd96d472I/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H6fe4c7fa1aae46d28138e794fd96d472I/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf631449459f74141916f3cb93637f4e3s/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H8ffb1fc9c6314f80843185d92f64e5a9M/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_50x50.jpg_.webp'}
      ],
      desc: '5XL Plus Men Winter New Outwear Thick Warm Parkas Jacket Coat Men Autumn Casual Windproof Pocket Detachable Hat Parka Jacket Men',
      discountPrice: 'MNT 21.04',
      originalPrice: null,
      discount: null,
      seller: 'mandmdirect.ie',
      brand: 'dresslily',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    }
  ];
  //shopping Items selling sellers 
  sellersArray = [
    {
      id: 1,
      name: 'AliExpress',
    },
    {
      id: 2,
      name: 'mandmdirect.io',
    },
    {
      id: 3,
      name: 'Zalando',
    },
    {
      id: 4,
      name: 'ASOS',
    },
    {
      id: 5,
      name: 'vidaXL',
    },
    {
      id: 6,
      name: 'DressLily',
    },
    {
      id: 7,
      name: 'Rosegal',
    },
    {
      id: 8,
      name: 'ZAFUL',
    },
    {
      id: 9,
      name: 'Zalando',
    },
    {
      id: 10,
      name: 'Dressinn',
    },
    {
      id: 11,
      name: 'Bikeinn',
    },
    {
      id: 12,
      name: 'Allbeauty',
    },
  ];
  sizesArray = [
    {
      id: 1,
      name: 'one size'
    },
    {
      id: 2,
      name: 'xs'
    },
    {
      id: 3,
      name: 's'
    },
    {
      id: 4,
      name: 'm'
    },
    {
      id: 5,
      name: 'l'
    },
    {
      id: 6,
      name: 'xl'
    },
    {
      id: 7,
      name: 'xxl'
    },
  ];
  videoPartners = [
    {
      id: 1,
      name: 'Youtube',
      img: 'assets/imgs/category-details/youtube.png',
    },
    {
      id: 2,
      name: 'Doovl',
      img: 'assets/imgs/category-details/letter-d.png',
    },
    {
      id: 3,
      name: 'Songkick',
      img: 'assets/imgs/category-details/s.png',
    },
  ];
  videosArray = [
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/H75d5d7e0a051497b96129a76be72c2fbA/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp',
      desc: 'ZOGAA 2020 Man Wool Blends Jacket New Formal Casual 5 Color Fashion Men\'s Long Cotton Coat S-3XL mens coats and jackets',
      category: 'youtube',
      time: '2 days ago'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/Hada97a3451904effb42c19706b6c18078/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp',
      desc: '5XL Men Winter New Casual Classic Warm Thick Fleece Parkas Jacket Coat Men Autumn Fashion Pockets Windproof Parka Men Plus Size',
      category: 'youtube',
      time: '6 days ago'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/H6fe4c7fa1aae46d28138e794fd96d472I/5XL-Plus-Men-Winter-New-Outwear-Thick-Warm-Parkas-Jacket-Coat-Men-Autumn-Casual-Windproof-Pocket.jpg_Q90.jpg_.webp',
      desc: '5XL Plus Men Winter New Outwear Thick Warm Parkas Jacket Coat Men Autumn Casual Windproof Pocket Detachable Hat Parka Jacket Men',
      category: 'youtube',
      time: '2 days ago'
    },
    {
      id: 4,
      img: 'https://ae01.alicdn.com/kf/Hea048a8cf9ac431e8b75efc71828bac7r/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp',
      desc: 'ZOGAA 2020 Man Wool Blends Jacket New Formal Casual 5 Color Fashion Men\'s Long Cotton Coat S-3XL mens coats and jackets',
      category: 'youtube',
      time: '7 days ago'
    },
    {
      id: 5,
      img: 'https://ae01.alicdn.com/kf/H571e436fbd32457088087e92bf972634s/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      desc: '5XL Men Winter New Casual Classic Warm Thick Fleece Parkas Jacket Coat Men Autumn Fashion Pockets Windproof Parka Men Plus Size',
      category: 'youtube',
      time: '2 days ago'
    },
    {
      id: 6,
      img: 'https://ae01.alicdn.com/kf/H17bbd9e64dd0420eb3d07e25f6a7e9cez/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      desc: '5XL Plus Men Winter New Outwear Thick Warm Parkas Jacket Coat Men Autumn Casual Windproof Pocket Detachable Hat Parka Jacket Men',
      category: 'youtube',
      time: '6 days ago'
    },
    {
      id: 7,
      img: 'https://ae01.alicdn.com/kf/H61247266c3a94628b3277bf9b4fc4e6c7/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      desc: 'ZOGAA 2020 Man Wool Blends Jacket New Formal Casual 5 Color Fashion Men\'s Long Cotton Coat S-3XL mens coats and jackets',
      category: 'youtube',
      time: '2 days ago'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/Hf220c05119864649a422f299a348be2b5/ZOGAA-2019-new-5-colors-Assassin-Master-hoodie-men-s-hooded-hooded-jacket-men-s-hooded.jpg_Q90.jpg_.webp',
      desc: '5XL Men Winter New Casual Classic Warm Thick Fleece Parkas Jacket Coat Men Autumn Fashion Pockets Windproof Parka Men Plus Size',
      category: 'youtube',
      time: '7 days ago'
    },    
  ];
  allApplicationsArray = [
    {
      id: 1,
      name: 'WEBTOON',
      img: 'https://play-lh.googleusercontent.com/48ehEzpO3FESH3ncULXG-iMPZRjxcqhtFXzLJlscWkBZIpIskxl30J7_1hG2riQtrkqe=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.naver.linewebtoon'
    },
    {
      id: 2,
      name: 'Marvel Comics',
      img: 'https://play-lh.googleusercontent.com/kKBluDZLS5J6S9MIcDJ3GvWTwaiXnzEqeIRYtLxQTSeEszDK11WYOSGug5kvfduSFus=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.marvel.unlimited'
    },
    {
      id: 3,
      name: 'XINHUA News',
      img: 'https://play-lh.googleusercontent.com/C9oCcUDd-NFBPlomQ_hUxhTXzaxg2p3iE6NB_bJIuGESJxadqxzS5ZqUgzntDJ5JOA=s180-rw',
      belongsTo: 'Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.xinhuamm.xinhuanews'
    },
    {
      id: 4,
      name: 'Shopify',
      img: 'https://play-lh.googleusercontent.com/TvHNOCXV1TnZe__sUmNUdAZzC17BZGRSsC30PN-lRIDCtLPC7D1KpYZMY5W7V8_GyTA=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.shopify.mobile'
    },
    {
      id: 5,
      name: 'Subway Surfers',
      img: 'https://play-lh.googleusercontent.com/N0cRWzreD-MT_IwcXKkK20Rzp10G1alWKGbw9McpfZ8Qa19SY-W3o0thOivS3BhZV4c=s180-rw',
      belongsTo: 'AppGallery',
      ur: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf'
    },
    {
      id: 6,
      name: 'Candy Crush Saga',
      img: 'https://play-lh.googleusercontent.com/gU9NKwpgLDYA6LIYK4dnkAkVyqNHUfTIqklEiNuO4oZ2OCpWQhQdqhnDh8Yb9B8SWIM=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga'
    },
    {
      id: 7,
      name: 'Hill Climb Racing',
      img: 'https://play-lh.googleusercontent.com/N0UxhBVUmx8s7y3F7Kqre2AcpXyPDKAp8nHjiPPoOONc_sfugHCYMjBpbUKCMlK_XUs=s180-rw',
      belongsTo: 'Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb'
    },
    {
      id: 8,
      name: 'Google Find My Device',
      img: 'https://play-lh.googleusercontent.com/aX0ql6V6PvVotibIvaNW7CRjaJ2oUyBIX_WgSkAl36vOAaoXiw6yQufxVQ2LV_D2DLg=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.adm'
    },

    {
      id: 1,
      name: 'WEBTOON',
      img: 'https://play-lh.googleusercontent.com/48ehEzpO3FESH3ncULXG-iMPZRjxcqhtFXzLJlscWkBZIpIskxl30J7_1hG2riQtrkqe=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.naver.linewebtoon'
    },
    {
      id: 2,
      name: 'Marvel Comics',
      img: 'https://play-lh.googleusercontent.com/kKBluDZLS5J6S9MIcDJ3GvWTwaiXnzEqeIRYtLxQTSeEszDK11WYOSGug5kvfduSFus=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.marvel.unlimited'
    },
    {
      id: 3,
      name: 'XINHUA News',
      img: 'https://play-lh.googleusercontent.com/C9oCcUDd-NFBPlomQ_hUxhTXzaxg2p3iE6NB_bJIuGESJxadqxzS5ZqUgzntDJ5JOA=s180-rw',
      belongsTo: 'Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.xinhuamm.xinhuanews'
    },
    {
      id: 4,
      name: 'Shopify',
      img: 'https://play-lh.googleusercontent.com/TvHNOCXV1TnZe__sUmNUdAZzC17BZGRSsC30PN-lRIDCtLPC7D1KpYZMY5W7V8_GyTA=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.shopify.mobile'
    },
    {
      id: 5,
      name: 'Subway Surfers',
      img: 'https://play-lh.googleusercontent.com/N0cRWzreD-MT_IwcXKkK20Rzp10G1alWKGbw9McpfZ8Qa19SY-W3o0thOivS3BhZV4c=s180-rw',
      belongsTo: 'AppGallery',
      ur: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf'
    },
    {
      id: 6,
      name: 'Candy Crush Saga',
      img: 'https://play-lh.googleusercontent.com/gU9NKwpgLDYA6LIYK4dnkAkVyqNHUfTIqklEiNuO4oZ2OCpWQhQdqhnDh8Yb9B8SWIM=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga'
    },
    {
      id: 7,
      name: 'Hill Climb Racing',
      img: 'https://play-lh.googleusercontent.com/N0UxhBVUmx8s7y3F7Kqre2AcpXyPDKAp8nHjiPPoOONc_sfugHCYMjBpbUKCMlK_XUs=s180-rw',
      belongsTo: 'Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb'
    },
    {
      id: 8,
      name: 'Google Find My Device',
      img: 'https://play-lh.googleusercontent.com/aX0ql6V6PvVotibIvaNW7CRjaJ2oUyBIX_WgSkAl36vOAaoXiw6yQufxVQ2LV_D2DLg=s180-rw',
      belongsTo: 'AppGallery',
      url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.adm'
    },
  ];
  musicVideos = [
    {
      id: 1,
      img: 'https://i.ytimg.com/vi/mrgbbziN2so/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCFTAe0f4_IVKy6xq0bcyyN84U9Q',
      duration: '03:44',
      desc: 'Shopping',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 2,
      img: 'https://i.ytimg.com/vi/QLXZ4G3Dg8c/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD3UHvFBvNcGs9g_8kcxpCHToC1tw',
      duration: '02:04',
      desc: 'Beautiful Salaam',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 3,
      img: 'https://i.ytimg.com/vi/mrgbbziN2so/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCFTAe0f4_IVKy6xq0bcyyN84U9Q',
      duration: '03:44',
      desc: 'Shopping',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 4,
      img: 'https://i.ytimg.com/vi/6XUy1Z9eVAI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApm8O2B2WZn7-wQ0nlNNe4AvrA5A',
      duration: '03:09',
      desc: 'Momina Mustehsan new hit',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 5,
      img: 'https://i.ytimg.com/vi/mrgbbziN2so/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCFTAe0f4_IVKy6xq0bcyyN84U9Q',
      duration: '03:44',
      desc: 'Shopping',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 6,
      img: 'https://i.ytimg.com/vi/9bnVfluEVlI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwn6cU_cqrDF9d8YDEWA5jcKlzhQ',
      duration: '02:04',
      desc: 'PUBG New State gameplay',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 7,
      img: 'https://i.ytimg.com/vi/ghZZB_7HFS8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnNLiJNL7M4PKibnctYgidOziSFw',
      duration: '10:22',
      desc: 'Create reposnive site in 5 minutes',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
    {
      id: 8,
      img: 'https://i.ytimg.com/vi/RZq4MGc_jCA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1H_jmVK2RhJXefd7McBqorBJ14w',
      duration: '16:10',
      desc: 'Aftab Iqbal and compnay here',
      belongsTo: 'YouTube Music',
      icon: 'assets/imgs/category-details/youtube.png'
    },
  ];
  imagesArray = [
    {
      id: 1,
      img: 'https://ae04.alicdn.com/kf/H591be038ceb24ceebc646eded1a88162y.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 2,
      img: 'https://ae04.alicdn.com/kf/H1012ca15bc564e49b2e020660c866934Y.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 3,
      img: 'https://ae04.alicdn.com/kf/H6b6a2e830d4b400c82a743f73f862ff9y.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 4,
      img: 'https://ae04.alicdn.com/kf/Hc153ea9eba024284b002f3a14e64e218U.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 5,
      img: 'https://ae04.alicdn.com/kf/H13cf2cf4751a446b87dfbd416a886bdbL.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 6,
      img: 'https://ae04.alicdn.com/kf/H8bb9a443145844248477165cf0ebdccdx.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 7,
      img: 'https://ae04.alicdn.com/kf/H5d63a3333358429d85a1ba7da372d253K.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 8,
      img: 'https://ae04.alicdn.com/kf/H6c6964d66a22471e9f7396294ace353af.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 9,
      img: 'https://ae04.alicdn.com/kf/H53a279c7f1714d49a55633d1e3d2f76f6.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 10,
      img: 'https://ae04.alicdn.com/kf/S53640b223b714a039e9fcbf3ed3fccc7N.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 11,
      img: 'https://ae04.alicdn.com/kf/HTB1herLacfrK1RkSnb4q6xHRFXa5.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 12,
      img: 'https://ae04.alicdn.com/kf/Hff3b77c28b554e67bfca0121c693d704h.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 13,
      img: 'https://ae04.alicdn.com/kf/H373201433ffb4a81be30f6c3806f11f5a.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 14,
      img: 'https://ae04.alicdn.com/kf/HTB1HJSHXrj1gK0jSZFOq6A7GpXaR.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 15,
      img: 'https://ae04.alicdn.com/kf/Hca1a09b3aab94eff99ac269be27c61eaS.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 16,
      img: 'https://ae04.alicdn.com/kf/H442eeac5a82c414aab253a4031070cc6q.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 1,
      img: 'https://ae04.alicdn.com/kf/H591be038ceb24ceebc646eded1a88162y.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 2,
      img: 'https://ae04.alicdn.com/kf/H1012ca15bc564e49b2e020660c866934Y.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 3,
      img: 'https://ae04.alicdn.com/kf/H6b6a2e830d4b400c82a743f73f862ff9y.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 4,
      img: 'https://ae04.alicdn.com/kf/Hc153ea9eba024284b002f3a14e64e218U.jpg_350x350.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 5,
      img: 'https://ae04.alicdn.com/kf/H13cf2cf4751a446b87dfbd416a886bdbL.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 6,
      img: 'https://ae04.alicdn.com/kf/H8bb9a443145844248477165cf0ebdccdx.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 7,
      img: 'https://ae04.alicdn.com/kf/H5d63a3333358429d85a1ba7da372d253K.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 8,
      img: 'https://ae04.alicdn.com/kf/H6c6964d66a22471e9f7396294ace353af.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 9,
      img: 'https://ae04.alicdn.com/kf/H53a279c7f1714d49a55633d1e3d2f76f6.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 10,
      img: 'https://ae04.alicdn.com/kf/S53640b223b714a039e9fcbf3ed3fccc7N.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 11,
      img: 'https://ae04.alicdn.com/kf/HTB1herLacfrK1RkSnb4q6xHRFXa5.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 12,
      img: 'https://ae04.alicdn.com/kf/Hff3b77c28b554e67bfca0121c693d704h.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 13,
      img: 'https://ae04.alicdn.com/kf/H373201433ffb4a81be30f6c3806f11f5a.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 14,
      img: 'https://ae04.alicdn.com/kf/HTB1HJSHXrj1gK0jSZFOq6A7GpXaR.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 15,
      img: 'https://ae04.alicdn.com/kf/Hca1a09b3aab94eff99ac269be27c61eaS.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
    {
      id: 16,
      img: 'https://ae04.alicdn.com/kf/H442eeac5a82c414aab253a4031070cc6q.jpg_480x480.jpg_Q90.jpg_.webp',
      url: 'https://www.aliexpress.com/campaign/wow/gcp/ae/channel/ae/accelerate/tupr?spm=a2g0o.home.16002.6.650c2145ez6la6&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_pid=ae%2Fchannel%2Fae%2Fverticalmarket%2Fb5DERXkDGw&scm=1007.31960.213782.0&scm_id=1007.31960.213782.0&scm-url=1007.31960.213782.0&pvid=3fa7b66c-d6ac-49f7-8ff6-e2b0863c0597&productIds=1005001932862717'
    },
  ];

  covidNewsShortArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/01/28/3248117.jpg?type=ofullfill220_150',
      title: "Kim Bu-gyeom “The goal of quarantine is to damage Omicron”",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/origin/449/2022/01/27/221560.jpg?type=nf220_150',
      title: "[Yeorangyarang] Democrats' 'blue jumper' restraint order 'Stomach pain disinfectant'-like 86 withdrawal theory? '",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
  ];
  covidNewsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/421/2022/01/28/5874379.jpg?type=ofullfill220_150',
      title: "The party's decision to not appoint a nominee is the right thing to do",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/023/2022/01/28/3669415.jpg?type=ofullfill220_150",
      title: "Lee Jun-seok, Crazy politicia at Lee Jae-myung in 'Park Jung-hee is marginalized in Honam",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/629/2022/01/28/130079.jpg?type=ofullfill220_150',
      title: "Wild 'Kwak Sang-do resigned' Daegu Jung-nam-gu no-goon... Seocho-gap nominee",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/014/2022/02/01/4781360.jpg?type=nf220_150',
      title: "[Explanation Section BOK Economy] What is Business Management Analysis?",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago'
    },
    {
      id: 9,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago'
    },
    {
      id: 10,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago'
    },
  ];
  sportsNewsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/296/2022/02/01/54074.jpg?type=nf220_150',
      title: "What will happen if I gain 1 kg of weight?",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229427.jpg?type=nf220_150",
      title: "A 100-year-old 'repertoire' of 'Robots take away jobs'... ",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/001/2022/02/01/12952193.jpg?type=nf220_150',
      title: "The theory that even snow covered the spread of Omicron... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229426.jpg?type=nf220_150',
      title: "<On Capital in the 21st Century> Why did Piketty declare a 'socialist'?",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/052/2022/02/01/1696610.jpg?type=nf220_150',
      title: "This is the true food culture... 'Makgeolli-making' that has become a cultural asset",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
    {
      id: 9,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 10,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
  ];
  gamesNewsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/296/2022/02/01/54074.jpg?type=nf220_150',
      title: "What will happen if I gain 1 kg of weight?",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229427.jpg?type=nf220_150",
      title: "A 100-year-old 'repertoire' of 'Robots take away jobs'... ",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'The customer who threw hotteok into boiling oil, ultimately sentenced, "The burn terror that threw hotteok into boiling oil, the last customer"'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/001/2022/02/01/12952193.jpg?type=nf220_150',
      title: "The theory that even snow covered the spread of Omicron... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229426.jpg?type=nf220_150',
      title: "<On Capital in the 21st Century> Why did Piketty declare a 'socialist'?",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: ''
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/052/2022/02/01/1696610.jpg?type=nf220_150',
      title: "This is the true food culture... 'Makgeolli-making' that has become a cultural asset",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago',
      smallDesc: ''
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'The customer who threw hotteok into boiling oil, ultimately sentenced, "The burn terror that threw hotteok into boiling oil, the last customer"'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 9,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 10,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: ""
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: "'[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/296/2022/02/01/54074.jpg?type=nf220_150',
      title: "What will happen if I gain 1 kg of weight?",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229427.jpg?type=nf220_150",
      title: "A 100-year-old 'repertoire' of 'Robots take away jobs'... ",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'The customer who threw hotteok into boiling oil, ultimately sentenced, "The burn terror that threw hotteok into boiling oil, the last customer"'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/001/2022/02/01/12952193.jpg?type=nf220_150',
      title: "The theory that even snow covered the spread of Omicron... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/002/2022/02/01/2229426.jpg?type=nf220_150',
      title: "<On Capital in the 21st Century> Why did Piketty declare a 'socialist'?",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: ''
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/052/2022/02/01/1696610.jpg?type=nf220_150',
      title: "This is the true food culture... 'Makgeolli-making' that has become a cultural asset",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7 minutes ago',
      smallDesc: ''
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'The customer who threw hotteok into boiling oil, ultimately sentenced, "The burn terror that threw hotteok into boiling oil, the last customer"'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 9,
      img: "https://mimgnews.pstatic.net/image/origin/119/2022/02/01/2572045.jpg?type=nf220_150",
      title: "Breaking the prejudice that 'insurance = difficult'... Insurance company upgrading YouTube",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3 minutes ago',
      smallDesc: 'Daegu has the highest number of confirmed cases in history...Delivery strikes back, why is it so expensive? '
    },
    {
      id: 10,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17 minutes ago',
      smallDesc: ""
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/01/5038398.jpg?type=nf220_150',
      title: "“Insurance disputes increase, insurance companies with low credibility must work hard to recover”",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23 minutes ago',
      smallDesc: "'[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
  ];
  businessVideosArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/422/2022/02/02/526336.jpg?type=nf220_150',
      title: 'Create a living room in a 5 pyeong studio',
      desc: '3 years later, the national debt is 1,416 trillion... ',
      time: '03:30'
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/origin/018/2022/02/02/5137816.jpg?type=nf220_150',
      title: 'From an apartment to a house, a life in',
      desc: 'What kind of company has a three-point outlook for the Serious Disaster Act No. ... ',
      time: '10:47'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/243/2022/02/02/22231.jpg?type=nf220_150',
      title: 'A white kitchen that makes you want to cook #selfinterior',
      desc: '1 drop rate in the new year, plummets more than HDC prefecture ... Institutional stocks are also released ...',
      time: '02:13'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/025/2022/02/02/3170539.jpg?type=nf220_150',
      title: 'How to separate and dispose of holiday gift sets and packaging boxes',
      desc: 'Semiconductor supply shortage has been put to rest...Hyundai Motor and Kia record new sales in January in the US ... ',
      time: '03:30'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/215/2022/02/02/1012481.jpg?type=nf220_150',
      title: '26 pyeong apartment, changing the living room structure with furniture arrangement ',
      desc: 'Jack Dorsey: "Is a big mistake that Zuckerberg paid attention to DM instead of Bitcoin ... ',
      time: '01:10'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/030/2022/02/02/2996539.jpg?type=nf220_150',
      title: 'LAN shoppers like white space, but they are maximalists.  ',
      desc: 'Government "The job market is recovering rapidly, focusing on quality jobs" ...',
      time: '04:33'
    },
  ];
  entertainmentArray = [
    {
      id: 1,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220127_1095%2Fupload_1643240526401tVl1W.jpg%22&type=nf340_228',
      title: 'BMW unveils partially modified 8-series and M8… ',
      desc: 'BMW unveiled the 8 Series and M8 facelift lineup with improved exterior and new technology on the 25th (local time). ',
      time: '03:30'
    },
    {
      id: 2,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220127_1095%2Fupload_16432405346271cVRa.jpg%22&type=nf340_228',
      title: 'Chevrolet enters into a contract for the new Traverse... Adds top-notch High Country trim',
      desc: 'Chevrolet announced on the 26th that it will start pre-orders for the large SUV Traverse facelift model. ',
      time: '10:47'
    },
    {
      id: 3,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220127_1095%2Fupload_1643240523425y0e4H.jpg%22&type=nf340_228',
      title: 'MHEV with EV mode, Jeep Renegade Compass e-Hybrid unveiled!',
      desc: 'The names are the Renegade e-Hybrid and the Compass e-Hybrid. ',
      time: '02:13'
    },
    {
      id: 4,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220127_1095%2Fupload_1643240530025kQJNQ.jpg%22&type=nf340_228',
      title: '"The king of bespoke bespoke craftsmanship" 13 kinds of customized Rolls-Royce that catches the eye',
      desc: '[Motoroid / Column] Rolls-Royce, one of the world\'s top three famous car brands, has selected and introduced 13 most beautiful bespoke models among the vehicles announced last year. ',
      time: '03:30'
    },
    {
      id: 5,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220128_1095%2Fupload_1643329118658iZElj.jpg%22&type=nf340_228',
      title: 'Mercedes-Benz unveils Maybach EQS... ',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. ',
      time: '01:10'
    },
    {
      id: 6,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220128_1095%2Fupload_1643329122578ixRUw.jpg%22&type=nf340_228',
      title: '[Test drive] One step of Genesis taking a proper step towards the market... ',
      desc: 'Genesis, which is quickly establishing itself in the premium market, announced the new start of the brand\'s flagship sedan, the G90. The new G90 has a bolder and more intense brand design, as well as various changes and developments to secure competitiveness in a more intense market. showed that it contained ',
      time: '04:33'
    },
    {
      id: 7,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220126_1095%2Fupload_1643156321491gPHns.jpg%22&type=nf340_228',
      title: '[Test drive] One step of Genesis taking a proper step towards the market... ',
      desc: 'Genesis, which is quickly establishing itself in the premium market, announced the new start of the brand\'s flagship sedan, the G90. The new G90 has a bolder and more intense brand design, as well as various changes and developments to secure competitiveness in a more intense market. showed that it contained ',
      time: '03:30'
    },
    {
      id: 8,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220126_1095%2Fupload_1643156312892ZWuQ9.jpg%22&type=nf340_228',
      title: '[Test drive] A compact SUV that attracts attention with its efficiency and lightness... ',
      desc: 'Recently, the proportion of \'diesel vehicles\' in the global automobile market as well as in the domestic automobile market is rapidly declining. In fact, most brands continue to delete \'diesel models\' from their portfolios and exclude them when introducing new models. ',
      time: '10:47'
    },
    {
      id: 9,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220128_1095%2Fupload_1643329116058ltyKp.jpg%22&type=nf340_228',
      title: 'Reminds me of a car from 1991.',
      desc: 'The automobile industry in 1991 was a year focused on \'finding a niche\'. ',
      time: '02:13'
    },
    {
      id: 10,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220125_1095%2Fupload_1643075397776b584Z.jpg%22&type=nf340_228',
      title: '"The king of bespoke bespoke craftsmanship" 13 kinds of customized Rolls-Royce that catches the eye',
      desc: '[Motoroid / Column] Rolls-Royce, one of the world\'s top three famous car brands, has selected and introduced 13 most beautiful bespoke models among the vehicles announced last year. ',
      time: '03:30'
    },
    {
      id: 11,
      img: 'https://s.pstatic.net/static/www/mobile/edit/20220125/cropImg_196x196_85021967116775105.jpeg',
      title: 'Reminds me of a car from 1991.',
      desc: 'Peugeot\'s new weapon, 9x8 hybrid hypercar pictorial released',
      time: '01:10'
    },
    {
      id: 12,
      img: 'https://s.pstatic.net/static/www/mobile/edit/20220125/cropImg_196x196_85021981451263351.jpeg',
      title: 'MHEV with EV mode, Jeep Renegade Compass e-Hybrid unveiled!',
      desc: 'Jeep has prepared new trims for the Renegade and Compass. ',
      time: '04:33'
    },
  ];

  healthArray = [
    {
      id: 1,
      img: 'https://s.pstatic.net/static/www/mobile/edit/20220128/mobile_184238891923.jpg',
      title: '[BEST BROW LIVE] NO.1 Brow Brand',
      desc: 'Benefit and Song Kang\'s Love Your Brow video released! ',
      time: '03:30'
    },
    {
      id: 2,
      img: 'https://s.pstatic.net/static/www/mobile/edit/20220128/mobile_184931169125.jpg',
      title: '[Today\'s Brand News] Today\'s last!',
      desc: 'a product with an original and unique design and delicate details.',
      time: '10:47'
    },
    {
      id: 3,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_149%2F1643354385019AIalY_PNG%2F2%25BF%25F93%25C0%25CF_%25C6%25D0%25BC%25C7%25BA%25E4%25C6%25BC%25C6%25C7_1%25B6%25F3%25C0%25CE_4%25B9%25F8%25BF%25B5%25BF%25AA.png%3Ftype%3Df226%22&type=nf340_228',
      title: 'All the way fashion beauty',
      desc: 'Here are the top 3 best brows in 2022, the most loved! ',
      time: '02:13'
    },
    {
      id: 4,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_37%2F1643358192072Y7XkN_JPEG%2F0.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Daily One Mile Wear Look Recommended',
      desc: 'In One Mile Wear, stay at home and work from home without end in cold weather! ',
      time: '03:30'
    },
    {
      id: 5,
      img: 'https://naverpa-phinf.pstatic.net/MjAyMTExMjNfODEg/MDAxNjM3NjM4Njc4NDQw.LxEBS8b4opzqCzpCnzQSLkKxSbAhcZXiydRCoZxCk8Ug.6GcOylB6QcAUqd7c_B099pfKcHgwyYZevHIrEcPRA0Ug.JPEG/20211123_nati.jpg',
      title: 'Mercedes-Benz unveils Maybach EQS... ',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. ',
      time: '01:10'
    },
    {
      id: 6,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220128_1095%2Fupload_1643329122578ixRUw.jpg%22&type=nf340_228',
      title: 'STL, a professional yoga wear brand',
      desc: 'In One Mile Wear, stay at home and work from home without end in cold weather! ',
      time: '04:33'
    },
    {
      id: 7,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_220%2F1643358195979PWLFE_JPEG%2F%25B9%25D9%25C4%25B2%25BD%25BA%25B8%25C6%25BD%25C3%25B5%25E5%25B7%25B9%25BD%25BA1.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Bottoms & dresses like this',
      desc: 'Isn\'t it definitely a dress that best expresses comfort, the key keyword of the 2022 S/S fashion trend? ',
      time: '03:30'
    },
    {
      id: 8,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_188%2F1643357404659ELbAq_JPEG%2F22.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Bottoms &amp; dresses like this',
      desc: 'Hello everyone, beauty item review testimonial My beloved Coco is here. Today, I looked at the basic lines of Drunk Elephant, which gave a great release of the basic line that adjusted the skin condition a little faster and more certain to the skin condition that could change at any time every day. Products that have been released to restore the condition of the skin, which are greatly affected by the external environment and weather, as it grows longer.',
      time: '10:47'
    },
    {
      id: 9,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_288%2F1643355543607GRWHY_JPEG%2FQR.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Jenny, like Naeun Son, a glamorous challenge',
      desc: 'Jennie, Lisa, and Yoona\'s colorful winter knit PICK?! ',
      time: '02:13'
    },
    {
      id: 10,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_225%2F164335659303373Ww7_JPEG%2FW.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Mixed smoothie recipe recommendations',
      desc: 'This time, it was launched in Sephora in Korea, so you don\'t have to buy it directly. Drunk Elephant! ',
      time: '03:30'
    },
    {
      id: 11,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20220128_58%2F1643356239312Uo2uN_JPEG%2FIMG_9943_jpg.jpg%3Ftype%3Df342_264%22&type=nf340_228',
      title: 'Drunk Elephant Honest Review',
      desc: 'As my acquaintances and neighbors will know, I have extremely sensitive skin..! ',
      time: '01:10'
    },
    {
      id: 12,
      img: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20211230_158%2F1640864260564Rn78l_JPEG%2F1640759261194.jpg%3Ftype%3Df342_264%22&type=nf464_260',
      title: 'MHEV with EV mode, Jeep Renegade Compass e-Hybrid unveiled!',
      desc: 'Jeep has prepared new trims for the Renegade and Compass. ',
      time: '04:33'
    },
  ];

  //QPress Data Array
  newsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/01/28/3248117.jpg?type=ofullfill220_150',
      title: "Kim Bu-gyeom “The goal of quarantine is to damage Omicron”",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/origin/449/2022/01/27/221560.jpg?type=nf220_150',
      title: "[Yeorangyarang] Democrats' 'blue jumper' restraint order 'Stomach pain disinfectant'-like 86 withdrawal theory? '",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/421/2022/01/28/5874379.jpg?type=ofullfill220_150',
      title: "The party's decision to not appoint a nominee is the right thing to do",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/023/2022/01/28/3669415.jpg?type=ofullfill220_150",
      title: "Lee Jun-seok, Crazy politicia at Lee Jae-myung in 'Park Jung-hee is marginalized in Honam",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '18',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/629/2022/01/28/130079.jpg?type=ofullfill220_150',
      title: "Wild 'Kwak Sang-do resigned' Daegu Jung-nam-gu no-goon... Seocho-gap nominee",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573773.jpg?type=nf220_150',
      title: "“Goal to launch 10 P2E games within this year” - Kakao Games Concall",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/011/2022/02/09/4016597.jpg?type=nf220_150",
      title: "Neowiz, operating profit of 23.2 billion won last year! 61.6% from the previous year↓",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/09/5041792.jpg?type=nf220_150',
      title: "Com2uS joins C2X in 'Summoners War: Hundred Years' War'",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573807.jpg?type=nf220_150',
      title: "Naver and Kakao provide information on COVID-19 rapid antigen test center",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 9,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/02/08/3250106.jpg?type=nf220_150',
      title: "It will crash in the Pacific Ocean 'Nemo' in January 2031.",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 10,
      img: "https://mimgnews.pstatic.net/image/origin/015/2022/02/08/4661068.jpg?type=nf220_150",
      title: "I found a strong candidate for a universal flu vaccine [Choi Ji-won's science talk]",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/469/2022/02/09/657128.jpg?type=nf220_150',
      title: "'0.00000000002%' Improved probability items that are harder than lottery... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 12,
      img: 'https://mimgnews.pstatic.net/image/origin/031/2022/02/09/652716.jpg?type=nf220_150',
      title: "[Now Science-Video] World's largest wind power generator test to be received in Korea",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
  ];
  subscribableNewsArray = [
    {
      id: 1,
      img: 'assets/imgs/news-subs/news-subs1.png'
    },
    {
      id: 2,
      img: 'assets/imgs/news-subs/news-subs2.jpeg'
    },
    {
      id: 3,
      img: 'assets/imgs/news-subs/news-subs3.png'
    },
    {
      id: 4,
      img: 'assets/imgs/news-subs/news-subs4.jpeg'
    },
  ];
  moreNewsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/421/2022/01/28/5874379.jpg?type=ofullfill220_150',
      title: "The party's decision to not appoint a nominee is the right thing to do",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/023/2022/01/28/3669415.jpg?type=ofullfill220_150",
      title: "Lee Jun-seok, Crazy politicia at Lee Jae-myung in 'Park Jung-hee is marginalized in Honam",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '18'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/629/2022/01/28/130079.jpg?type=ofullfill220_150',
      title: "Wild 'Kwak Sang-do resigned' Daegu Jung-nam-gu no-goon... Seocho-gap nominee",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573773.jpg?type=nf220_150',
      title: "“Goal to launch 10 P2E games within this year” - Kakao Games Concall",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/011/2022/02/09/4016597.jpg?type=nf220_150",
      title: "Neowiz, operating profit of 23.2 billion won last year! 61.6% from the previous year↓",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/09/5041792.jpg?type=nf220_150',
      title: "Com2uS joins C2X in 'Summoners War: Hundred Years' War'",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573807.jpg?type=nf220_150',
      title: "Naver and Kakao provide information on COVID-19 rapid antigen test center",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
    {
      id: 9,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/02/08/3250106.jpg?type=nf220_150',
      title: "It will crash in the Pacific Ocean 'Nemo' in January 2031.",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7'
    },
    {
      id: 10,
      img: "https://mimgnews.pstatic.net/image/origin/015/2022/02/08/4661068.jpg?type=nf220_150",
      title: "I found a strong candidate for a universal flu vaccine [Choi Ji-won's science talk]",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/469/2022/02/09/657128.jpg?type=nf220_150',
      title: "'0.00000000002%' Improved probability items that are harder than lottery... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17'
    },
    {
      id: 12,
      img: 'https://mimgnews.pstatic.net/image/origin/031/2022/02/09/652716.jpg?type=nf220_150',
      title: "[Now Science-Video] World's largest wind power generator test to be received in Korea",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23'
    },
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/422/2022/02/07/527065.jpg?type=nf220_150',
      linkTxt: 'First private pre-order this year ',
      title: "From tomorrow in Paju and Yangju, 1,000 households with private pre-orders will be available",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Started the 3rd private pre-order in Paju, etc... A total of 1,003 households" LH, Paju Unjeong 3 District 1498 supply'
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/origin/011/2022/02/07/4015790.jpg?type=nf220_150',
      linkTxt: 'Discover innovative start-ups Participate ',
      title: "“Those who will take a leap forward as a unicorn” Shinhan Financial New Startup Recruitment",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: ""
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/018/2022/02/07/5140231.jpg?type=nf220_150',
      linkTxt: 'First private pre-order this year ',
      title: " Combination of domestic and foreign stock transfer income! Be careful!",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Started the 3rd private pre-order in Paju, etc... A total of 1,003 householdsy'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/014/2022/02/07/4783728.jpg?type=nf220_150',
      linkTxt: 'Discover innovative start-ups Participate ',
      title: "“Those who will take a leap forward as a unicorn” Shinhan Financial New Startup Recruitment",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: ""
    },
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/421/2022/01/28/5874379.jpg?type=ofullfill220_150',
      title: "The party's decision to not appoint a nominee is the right thing to do",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/023/2022/01/28/3669415.jpg?type=ofullfill220_150",
      title: "Lee Jun-seok, Crazy politicia at Lee Jae-myung in 'Park Jung-hee is marginalized in Honam",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '18',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/629/2022/01/28/130079.jpg?type=ofullfill220_150',
      title: "Wild 'Kwak Sang-do resigned' Daegu Jung-nam-gu no-goon... Seocho-gap nominee",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573773.jpg?type=nf220_150',
      title: "“Goal to launch 10 P2E games within this year” - Kakao Games Concall",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/011/2022/02/09/4016597.jpg?type=nf220_150",
      title: "Neowiz, operating profit of 23.2 billion won last year! 61.6% from the previous year↓",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/09/5041792.jpg?type=nf220_150',
      title: "Com2uS joins C2X in 'Summoners War: Hundred Years' War'",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573807.jpg?type=nf220_150',
      title: "Naver and Kakao provide information on COVID-19 rapid antigen test center",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 9,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/02/08/3250106.jpg?type=nf220_150',
      title: "It will crash in the Pacific Ocean 'Nemo' in January 2031.",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 10,
      img: "https://mimgnews.pstatic.net/image/origin/015/2022/02/08/4661068.jpg?type=nf220_150",
      title: "I found a strong candidate for a universal flu vaccine [Choi Ji-won's science talk]",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/469/2022/02/09/657128.jpg?type=nf220_150',
      title: "'0.00000000002%' Improved probability items that are harder than lottery... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 12,
      img: 'https://mimgnews.pstatic.net/image/origin/031/2022/02/09/652716.jpg?type=nf220_150',
      title: "[Now Science-Video] World's largest wind power generator test to be received in Korea",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
  ];
  economyNewsArray = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/422/2022/02/07/527065.jpg?type=nf220_150',
      linkTxt: 'First private pre-order this year ',
      title: "From tomorrow in Paju and Yangju, 1,000 households with private pre-orders will be available",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Started the 3rd private pre-order in Paju, etc... A total of 1,003 households" LH, Paju Unjeong 3 District 1498 supply'
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/origin/011/2022/02/07/4015790.jpg?type=nf220_150',
      linkTxt: 'Discover innovative start-ups Participate ',
      title: "“Those who will take a leap forward as a unicorn” Shinhan Financial New Startup Recruitment",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: "“The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials."
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/018/2022/02/07/5140231.jpg?type=nf220_150',
      linkTxt: 'First private pre-order this year ',
      title: " Combination of domestic and foreign stock transfer income! Be careful!",
      commentsCount: '50+',
      newsPaperName: 'Seol Newspaper',
      smallDesc: 'Started the 3rd private pre-order in Paju, etc... A total of 1,003 householdsy'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/014/2022/02/07/4783728.jpg?type=nf220_150',
      linkTxt: 'Discover innovative start-ups Participate ',
      title: "“Those who will take a leap forward as a unicorn” Shinhan Financial New Startup Recruitment",
      commentsCount: '100+',
      newsPaperName: 'Channel A',
      smallDesc: ""
    },
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/origin/421/2022/01/28/5874379.jpg?type=ofullfill220_150',
      title: "The party's decision to not appoint a nominee is the right thing to do",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 2,
      img: "https://mimgnews.pstatic.net/image/origin/023/2022/01/28/3669415.jpg?type=ofullfill220_150",
      title: "Lee Jun-seok, Crazy politicia at Lee Jae-myung in 'Park Jung-hee is marginalized in Honam",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression'"
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/01/28/2571601.jpg?type=ofullfill220_150',
      title: "Kim Jae-won The party's order to run as an independent and be elected",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '18',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/origin/629/2022/01/28/130079.jpg?type=ofullfill220_150',
      title: "Wild 'Kwak Sang-do resigned' Daegu Jung-nam-gu no-goon... Seocho-gap nominee",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573773.jpg?type=nf220_150',
      title: "“Goal to launch 10 P2E games within this year” - Kakao Games Concall",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 6,
      img: "https://mimgnews.pstatic.net/image/origin/011/2022/02/09/4016597.jpg?type=nf220_150",
      title: "Neowiz, operating profit of 23.2 billion won last year! 61.6% from the previous year↓",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/09/5041792.jpg?type=nf220_150',
      title: "Com2uS joins C2X in 'Summoners War: Hundred Years' War'",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/origin/119/2022/02/09/2573807.jpg?type=nf220_150',
      title: "Naver and Kakao provide information on COVID-19 rapid antigen test center",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 9,
      img: 'https://mimgnews.pstatic.net/image/origin/081/2022/02/08/3250106.jpg?type=nf220_150',
      title: "It will crash in the Pacific Ocean 'Nemo' in January 2031.",
      newsPaperName: 'News 1',
      commentsCount: '60+',
      time: '7',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 10,
      img: "https://mimgnews.pstatic.net/image/origin/015/2022/02/08/4661068.jpg?type=nf220_150",
      title: "I found a strong candidate for a universal flu vaccine [Choi Ji-won's science talk]",
      newsPaperName: 'Chosun Ilbo',
      commentsCount: '30+',
      time: '3',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/origin/469/2022/02/09/657128.jpg?type=nf220_150',
      title: "'0.00000000002%' Improved probability items that are harder than lottery... ",
      newsPaperName: 'Dalian',
      commentsCount: '100+',
      time: '17',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
    {
      id: 12,
      img: 'https://mimgnews.pstatic.net/image/origin/031/2022/02/09/652716.jpg?type=nf220_150',
      title: "[Now Science-Video] World's largest wind power generator test to be received in Korea",
      newsPaperName: 'The Fact',
      commentsCount: '20+',
      time: '23',
      smallDesc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials.”'
    },
  ];
  //Ranking Page Array
  rankingArray = [
    {
      id: 1,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/437/2020/08/25/logo_437_56_20200825135552.png',
      channelName: 'JTBC',
      news: [
        {
          id: '1',
          title: 'US, 800,000 confirmed cases → 200,000 drops! Spread of Take Off Mask Movement',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289061.jpg?type=nf148_148&ut=1644369181000',
          time: '5'
        },
        {
          id: '2',
          title: 'Short track bias judgment controversy, The owner of a chicken restaurant for giving away two chicken legs apologizes',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289043.jpg?type=nf148_148&ut=1644360721000',
          time: '7'
        },
        {
          id: '3',
          title: 'Yoon Seok-yeol "If there is trust, we can unite in 10 minutes", US to increase issuance of work visas for Korean professionals ',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289076.jpg?type=nf148_148&ut=1644382021000',
          time: '1'
        },
        {
          id: '4',
          title: 'Another change to the intensive management group standard, The representative symptom of Omicron is',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289075.jpg?type=nf148_148&ut=1644378661000',
          time: '50'
        },
        {
          id: '5',
          title: '"Hwang Dae-heon is liberated... China broadcasts medals in a festive mood"',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289070.jpg?type=nf148_148&ut=1644374108000',
          time: '24'
        },
      ]
    },
    {
      id: 2,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/016/2020/11/03/logo_016_56_20201103113832.jpg',
      channelName: 'Herald Economy',
      news: [
        {
          id: '3',
          title: 'Yoon Seok-yeol "If there is trust, we can unite in 10 minutes", US to increase issuance of work visas for Korean professionals ',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289076.jpg?type=nf148_148&ut=1644382021000',
          time: '1'
        },
        {
          id: '4',
          title: 'Another change to the intensive management group standard, The representative symptom of Omicron is',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289075.jpg?type=nf148_148&ut=1644378661000',
          time: '50'
        },
        {
          id: '5',
          title: '"Hwang Dae-heon is liberated... China broadcasts medals in a festive mood"',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289070.jpg?type=nf148_148&ut=1644374108000',
          time: '24'
        },
        {
          id: '1',
          title: 'US, 800,000 confirmed cases → 200,000 drops! Spread of Take Off Mask Movement',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289061.jpg?type=nf148_148&ut=1644369181000',
          time: '5'
        },
        {
          id: '2',
          title: 'Short track bias judgment controversy, The owner of a chicken restaurant for giving away two chicken legs apologizes',
          img: 'https://mimgnews.pstatic.net/image/origin/437/2022/02/09/289043.jpg?type=nf148_148&ut=1644360721000',
          time: '7'
        },
      ]
    }
  ];
  viewNewsArray = [
    {
      id: 1,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/009/2018/03/07/logo_009_37_20180307120307.jpg',
      channelName: 'Maeil Economic Daily',
      pagesCount: '20',
      title: 'charter here until his 40s after getting married',
      desc: 'Abandoning the area where I lived for a long time and buying a cheap house in the outskirts of Seoul last year, moving to the second part of the city last year, overtaking the first move in the same premises ◆ House price and population movement ◆ Office worker A, who was born in Mapo-gu, Seoul and lived in a charter here until his 40s after getting married'
    },
    {
      id: 2,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/016/2018/09/06/logo_016_37_20180906165506.png',
      channelName: 'Herald Economy',
      pagesCount: '39',
      title: '13,000 people surged in one day... ',
      desc: "[Yeorang Yarang] Jae-myung Lee “I'm not a bad person” / What do presidential candidates say about 'children' / The breeze of the Democratic Party's 'resignation theory'? [Yeorang Yarang] 'Difficulty' missing Hong Jun-pyo / Lee Jae-myung 'sentiment' vs Yoon Seok-yeol's 'compression"
    },
    {
      id: 3,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/353/2020/03/24/logo_353_37_20200324220624.png',
      channelName: 'Jungang SUNDAY',
      pagesCount: '23',
      title: '[view] Chineseism swallowed up the Olympic spirit',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 4,
      channelImg: 'https://mimgnews.pstatic.net/image/upload/office_logo/081/2017/10/18/logo_081_37_20171018163018.png',
      channelName: 'Seoul Newspaper',
      pagesCount: '23',
      title: 'China broke the process, No Olympics explosion',
      desc: 'Genesis, which is quickly establishing itself in the premium market, announced the new start of the brand\'s flagship sedan, the G90. The new G90 has a bolder and more intense brand design, as well as various changes and developments to secure competitiveness in a more intense market. showed that it contained '
    },
  ];
  opinionArray = [
    {
      id: 1,
      title: "[Reporter's Note] Adjustment of police investigation authority revealed limitations of 'judiciary vacuum and overlapping investigation'",
      img: 'https://mimgnews.pstatic.net/image/origin/366/2022/02/11/793097.jpg?type=nf148_148',
      newsName: 'Chosun Biz ',
      time: '2022.02.11.'
    },
    {
      id: 2,
      title: "[Desk Column] Who Raised Cows?",
      img: 'https://mimgnews.pstatic.net/image/origin/031/2022/02/11/653352.jpg?type=nf148_148',
      newsName: 'iNews 24 ',
      time: '2022.02.11.'
    },
    {
      id: 3,
      title: "[Cha Ho-jung's finance column] Year-end settlement and correction request",
      img: 'https://mimgnews.pstatic.net/image/origin/658/2022/02/11/1958.jpg?type=nf148_148',
      newsName: 'Munhwa Ilbo ',
      time: '2022.02.11.'
    },
    {
      id: 4,
      title: "[Blank] Conversion of quarantine measures",
      img: 'https://mimgnews.pstatic.net/image/origin/656/2022/02/11/2458.jpg?type=nf148_148',
      newsName: 'Daejeon Ilbo ',
      time: '2022.02.11.'
    },
    {
      id: 5,
      title: "Disrespect of the Chinese Ambassador to Korea",
      img: 'https://mimgnews.pstatic.net/image/origin/469/2022/02/11/657723.jpg?type=nf148_148',
      newsName: 'Hankook Ilbo ',
      time: '2022.02.11.'
    },
    {
      id: 6,
      title: "Pension reform 'second text' no",
      img: 'https://mimgnews.pstatic.net/image/origin/277/2022/02/11/5043036.jpg?type=nf148_148',
      newsName: 'Hankook Ilbo ',
      time: '2022.02.11.'
    },
  ];
  newsLogo = [
    {
      id: 1,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/437/2018/09/19/logo_437_6_20180919153419.png',
    },
    {
      id: 2,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/056/2020/09/15/logo_056_6_20200915153508.png',
    },
    {
      id: 3,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/214/2020/09/15/logo_214_6_20200915153641.png',
    },
    {
      id: 4,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/057/2020/09/15/logo_057_6_20200915153924.png',
    },
    {
      id: 5,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/055/2020/09/15/logo_055_6_20200915154015.png',
    },
    {
      id: 6,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/374/2021/01/07/logo_374_6_20210107162903.png',
    },
    {
      id: 7,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/448/2020/09/15/logo_448_6_20200915154233.png',
    },
    {
      id: 8,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/052/2020/11/17/logo_052_6_20201117112951.png',
    },
    {
      id: 10,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/421/2018/09/19/logo_421_6_20180919151119.png',
    },
    {
      id: 11,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/003/2019/01/23/logo_003_6_20190123191323.jpg',
    },
    {
      id: 12,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/001/2020/09/15/logo_001_6_20200915184213.png',
    },
    {
      id: 13,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/449/2020/09/15/logo_449_6_20200915190621.png',
    },
    {
      id: 14,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/215/2020/09/15/logo_215_6_20200915191012.png',
    },
    {
      id: 15,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/025/2021/08/24/logo_025_6_20210824123340.png',
    },
    {
      id: 16,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/032/2020/09/15/logo_032_6_20200915155035.png',
    },
    {
      id: 17,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/020/2019/01/22/logo_020_6_20190122142722.png',
    },
    {
      id: 18,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/021/2020/09/15/logo_021_6_20200915182619.png',
    },
    {
      id: 19,
      img: 'https://mimgnews.pstatic.net/image/upload/office_logo/022/2020/09/15/logo_022_6_20200915183753.png',
    },
  ];
  storiesArray = [
    {
      id: 1,
      name: 'Stuart Little',
      profilePicture: 'https://images.unsplash.com/photo-1590367157699-24574a4678f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/H34e67cee16e64c0f9a6ed5a7b9d69a8b6/BJD-Dolls-With-Fashion-Clothes-13-Moveable-Joints-17CM-Doll-Soft-Wig-Plastic-Body-Head-Full.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 2,
      name: 'Joseph Nom',
      profilePicture: 'https://images.unsplash.com/photo-1644915573773-ff0827323c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60 600w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/Hf4a647f7ebd640e58056751dd983a9caw/New-Upgrade-Original-Lenovo-LP40-TWS-Wireless-Earphone-Bluetooth5-0-Dual-Stereo-Noise-Reduction-Bass-Touch.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials. '
    },
    {
      id: 3,
      name: 'Colin Lyn',
      profilePicture: 'https://images.unsplash.com/photo-1590367157699-24574a4678f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/H730271f501af4e4dbf3fec93984341e4v/Inteligente-Hombre-D18s-1-44in-Smart-Watch-Sleep-Monitoring-Watch-For-Men-Fitness-tracker-Waterproof-Smartwatch.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 4,
      name: 'Stephen Bob',
      profilePicture: 'https://images.unsplash.com/photo-1644915573773-ff0827323c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60 600w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/H93e806ca6156473787405fc361ececf4Z/Beard-Growth-Essential-Oil-100-Natural-Beard-Growth-Oil-Hair-Loss-Products-For-Men-Beard-Care.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 5,
      name: 'Smith sho',
      profilePicture: 'https://images.unsplash.com/photo-1590367157699-24574a4678f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/S904e7ca9098b434eb82a9690c64253c4i/Baseus-65W-GaN-Charger-Quick-Charge-4-0-3-0-Type-C-PD-USB-Charger-with.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 6,
      name: 'Ricky Will',
      profilePicture: 'https://images.unsplash.com/photo-1644915573773-ff0827323c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60 600w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/H184374f0ab094544882d69555b4f1d8bI/HRC55-Carbide-End-Mill-1-2-4-5-6-8-10-12mm-4Flutes-Milling-Cutter-Alloy.jpg_Q90.jpg_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 7,
      name: 'Smeed Hoe',
      profilePicture: 'https://images.unsplash.com/photo-1590367157699-24574a4678f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w',
      imgsArray: [{
        img: 'https://ae01.alicdn.com/kf/H785274b22dcd4c2a9ae8c9742095a898P/JBL-GO-2-GO-3Wireless-Bluetooth-compatible-Speaker-Mini-IPX7-Waterproof-Outdoor-Sound-Rechargeable-Battery-With.png_.webp',
        },
      ],
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
  ];

  //QMALL SIDE
  shoppingItemsArray = [
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/Had7419c63908489f9d5d5b95be7c069fQ/Printed-T-shirt-3d-Men-s-Short-Sleeve-Oversized-Clothing-Vintage-New-Summer-Fashion-American-66.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Had7419c63908489f9d5d5b95be7c069fQ/Printed-T-shirt-3d-Men-s-Short-Sleeve-Oversized-Clothing-Vintage-New-Summer-Fashion-American-66.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hbef443cb985d48f496c95e0f97dcd235a/2021-New-Men-s-Sports-Hooded-Sweatshirt-Men-Plus-Size-Slant-Zipper-Letter-Hoodies-Long-Sleeve.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Had7419c63908489f9d5d5b95be7c069fQ/Printed-T-shirt-3d-Men-s-Short-Sleeve-Oversized-Clothing-Vintage-New-Summer-Fashion-American-66.jpg_Q90.jpg_.webp'}
      ],
      title: 'Bomber Zipper Jacket',
      desc: "Spring Autumn New Men's Bomber Zipper Jacket Male Casual Streetwear Hip Hop Slim Fit Pilot Coat Men Clothing M-3XL XXXL",
      discountPrice: 'MNT 4.99',
      originalPrice: 'MNT 5.20',
      brandName: 'Hall of Fame Store',
      hashtag: '#fabrics',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/Hbef443cb985d48f496c95e0f97dcd235a/2021-New-Men-s-Sports-Hooded-Sweatshirt-Men-Plus-Size-Slant-Zipper-Letter-Hoodies-Long-Sleeve.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hbef443cb985d48f496c95e0f97dcd235a/2021-New-Men-s-Sports-Hooded-Sweatshirt-Men-Plus-Size-Slant-Zipper-Letter-Hoodies-Long-Sleeve.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/S3ae1a1c24ad94773b4cadfa338bc33e8w/Men-s-Tracksuit-Outdoor-Zipper-Jackets-Pants-Sets-Casual-Hooded-Jogging-Suit-Sportswear-Set-Fitness-Sport.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hbef443cb985d48f496c95e0f97dcd235a/2021-New-Men-s-Sports-Hooded-Sweatshirt-Men-Plus-Size-Slant-Zipper-Letter-Hoodies-Long-Sleeve.jpg_Q90.jpg_.webp'}
      ],
      title: '3d casual male shirt',
      desc: "Model graphic spartan print 3d casual male shirt around the neck oversized short sleeve men's T-shirt sport men's clothing",
      discountPrice: 'MNT 5.99',
      originalPrice: 'MNT 10.0',
      brandName: 'Hyberland Store',
      hashtag: '#perfects',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/S3ae1a1c24ad94773b4cadfa338bc33e8w/Men-s-Tracksuit-Outdoor-Zipper-Jackets-Pants-Sets-Casual-Hooded-Jogging-Suit-Sportswear-Set-Fitness-Sport.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/S3ae1a1c24ad94773b4cadfa338bc33e8w/Men-s-Tracksuit-Outdoor-Zipper-Jackets-Pants-Sets-Casual-Hooded-Jogging-Suit-Sportswear-Set-Fitness-Sport.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H0f60450aeb6345cb9f52605b43a29f49n/2021-New-Women-T-shirts-26-Letter-Printed-Vogue-Harajuku-Tops-Casual-Tee-Summer-Short-Sleeve.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/S3ae1a1c24ad94773b4cadfa338bc33e8w/Men-s-Tracksuit-Outdoor-Zipper-Jackets-Pants-Sets-Casual-Hooded-Jogging-Suit-Sportswear-Set-Fitness-Sport.jpg_Q90.jpg_.webp'}
      ],
      title: 'Crown King KING 3D Printing Print',
      desc: "Men's Shirt Crown King KING 3D Printing Print Round Neck T-shirt High-quality Clothing Street Fashion Men Oversize 5XL",
      discountPrice: 'MNT 333.0',
      originalPrice: 'MNT 573.28',
      brandName: 'job burnout Store',
      hashtag: '#shorts',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 4,
      img: 'https://ae01.alicdn.com/kf/H0f60450aeb6345cb9f52605b43a29f49n/2021-New-Women-T-shirts-26-Letter-Printed-Vogue-Harajuku-Tops-Casual-Tee-Summer-Short-Sleeve.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H0f60450aeb6345cb9f52605b43a29f49n/2021-New-Women-T-shirts-26-Letter-Printed-Vogue-Harajuku-Tops-Casual-Tee-Summer-Short-Sleeve.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H0f60450aeb6345cb9f52605b43a29f49n/2021-New-Women-T-shirts-26-Letter-Printed-Vogue-Harajuku-Tops-Casual-Tee-Summer-Short-Sleeve.jpg_Q90.jpg_.webp'}
      ],
      title: '',
      desc: 'Funny Face Graphic T Shirt For Men Tee Camisetas Tops Ropa Hombre Streetwear Clothing Camisa Masculina Koszulki Chemise Homme',
      discountPrice: 'MNT 23.00',
      originalPrice: 'MNT 994.81',
      brandName: 'Stefan Costume First Store',
      hashtag: '#liked',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 5,
      img: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Patchwork',
      desc: "Summer Fashion Men's T Shirt Casual Patchwork Short Sleeve T Shirt Mens Clothing Trend Casual Slim Fit Hip-Hop Top Tees 5XL",
      discountPrice: 'MNT 43.00',
      originalPrice: 'MNT 999.29',
      brandName: 'Diarmuid Store',
      hashtag: '#colors',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 6,
      img: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp'}
      ],
      title: 'Outdoor Zipper Jackets Pants',
      desc: "Men's Tracksuit Outdoor Zipper Jackets Pants Sets Casual Hooded Jogging Suit Sportswear Set Fitness Sport Suits Man Clothing",
      discountPrice: 'MNT 34.00',
      originalPrice: 'MNT 3331.00',
      brandName: 'job burnout Store',
      hashtag: '#offers',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
  ];
  mostPopularPicksArray = [
    {
      id: 7,
      img: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      desc: 'COODRONY Brand Summer New Arrivals Fashion Casual Men Striped Polo-Tshirt Classic Male Turn-down Collar Slim Fit Clothing W5017S',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'}
      ],
      title: 'Sleeve Shirt Best Seller',
      desc: 'T Shirt Men Summer Casual Short Sleeve Shirt Best Seller Men Clothing Streetwear Skull Print Graphic Tee Shirts Tshirts Tops',
      discountPrice: 'MNT 66.88',
      originalPrice: 'MNT 99.99',
      brandName: 'COODRONY Official Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
  ];
  overSeasDirectPurchase = [
    {
      id: 7,
      img: 'https://ae01.alicdn.com/kf/H955828eae57545498334bb319bd8dc88d/4-Heating-Zones-Electric-USB-Heated-Jackets-by-Graphene-Men-Smart-Thermostat-Waterproof-Coat-Outdoor-Clothing.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H955828eae57545498334bb319bd8dc88d/4-Heating-Zones-Electric-USB-Heated-Jackets-by-Graphene-Men-Smart-Thermostat-Waterproof-Coat-Outdoor-Clothing.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H955828eae57545498334bb319bd8dc88d/4-Heating-Zones-Electric-USB-Heated-Jackets-by-Graphene-Men-Smart-Thermostat-Waterproof-Coat-Outdoor-Clothing.jpg_Q90.jpg_.webp'}
      ],
      title: 'ackets by Graphene',
      desc: '4 Heating Zones Electric USB Heated Jackets by Graphene Men Smart Thermostat Waterproof Coat Outdoor Clothing Snow Winter RXM686',
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'ROXDIA Official Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/U9a48e0f339c746618d1498801220ac81q/Trendyol-Men-Printed-New-T-Shirt-TMNSS20TS0078-Men-S-Clothing-Fashion-2021-Summer-Spring-Men-S.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/U9a48e0f339c746618d1498801220ac81q/Trendyol-Men-Printed-New-T-Shirt-TMNSS20TS0078-Men-S-Clothing-Fashion-2021-Summer-Spring-Men-S.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/U9a48e0f339c746618d1498801220ac81q/Trendyol-Men-Printed-New-T-Shirt-TMNSS20TS0078-Men-S-Clothing-Fashion-2021-Summer-Spring-Men-S.jpg_Q90.jpg_.webp'}
      ],
      title: 'New T-Shirt TMNSS20TS0078',
      desc: "Trendyol Men Printed New T-Shirt TMNSS20TS0078 Men 'S Clothing Fashion 2021 Summer Spring Men 'S Top T-Shirts футболка оверсайз футболк",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'Trendyol Men Official Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 7,
      img: 'https://ae01.alicdn.com/kf/H936afa39452148fab1fc989f67dbd207v/2021-New-8colors-Men-Hoodies-Sweatshirts-Smile-Print-Headwear-Hoodie-Hip-Hop-Streetwear-Clothing-Tops-Plus.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H936afa39452148fab1fc989f67dbd207v/2021-New-8colors-Men-Hoodies-Sweatshirts-Smile-Print-Headwear-Hoodie-Hip-Hop-Streetwear-Clothing-Tops-Plus.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/U9a48e0f339c746618d1498801220ac81q/Trendyol-Men-Printed-New-T-Shirt-TMNSS20TS0078-Men-S-Clothing-Fashion-2021-Summer-Spring-Men-S.jpg_Q90.jpg_.webp'}
      ],
      title: 'Hoodies Sweatshirts Smile',
      desc: '2021 New 8colors Men Hoodies Sweatshirts Smile Print Headwear Hoodie Hip Hop Streetwear Clothing Tops Plus Size 3XL',
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'Dreamboat Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/Sae28918e49fb467ea1724b03a4db1b72J/Men-s-Tracksuit-Sportswear-Sets-Casual-Baseball-Jackets-Pants-Two-Piece-Set-Outdoor-Sport-Suit-Classic.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Sae28918e49fb467ea1724b03a4db1b72J/Men-s-Tracksuit-Sportswear-Sets-Casual-Baseball-Jackets-Pants-Two-Piece-Set-Outdoor-Sport-Suit-Classic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/U9a48e0f339c746618d1498801220ac81q/Trendyol-Men-Printed-New-T-Shirt-TMNSS20TS0078-Men-S-Clothing-Fashion-2021-Summer-Spring-Men-S.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Baseball Jackets Pants',
      desc: "Men's Tracksuit Sportswear Sets Casual Baseball Jackets Pants Two Piece Set Outdoor Sport Suit Classic Man Fashion Clothing",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://www.daraz.pk/catalog/?q=t+shirts&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.a8425380QB6YP4'
    },
  ];
  giftSectionArray = [
    {
      id: 1,
      tagline: 'Collect items that are good to present',
      discount: 'Enjoy discount on every favorite item',
      img: 'https://ae01.alicdn.com/kf/S19431f6da8e149cbb7be9b195a5383c6z/Men-Bracelet-3-IN-1-Health-Energy-Bangle-Arthritis-Twisted-Magnetic-Exquisite-Bracelet-Male-Gift-Power.jpg_Q90.jpg_.webp',
      gifts: [
        {
          name: 'Shirts',
          img: 'https://ae01.alicdn.com/kf/H1f1dc3a7d3524240a0464eb72cfeab5ac/Crown-King-Graphic-T-Shirts-Tee-Men-T-Shirt-Clothing-Camisetas-Tops-Ropa-Hombre-Summer-Streetwear.jpg_640x640.jpg'
        },
        {
          name: 'Rings',
          img: 'https://ae01.alicdn.com/kf/S939c6736be8c49aeb774f742670310e3c/LXOEN-Fashion-10-Colors-AAA-CZ-Hoop-Earrings-For-Women-Silver-Color-Crystal-Girl-Hoops-Jewelry.jpg_Q90.jpg_.webp'
        },
        {
          name: 'Earings',
          img: 'https://ae01.alicdn.com/kf/H07df8be87b7447ccac9c8abbfb7728c0x/Large-Circle-Hoop-Earrings-Gold-Silver-Color-For-Women-Round-Earrings-Hoops-Ear-Rings-Women-Girl.jpg_Q90.jpg_.webp'
        },
      ]
    }
  ];
  giftSectionInstaViewArray = [
    {
      id: 1,
      name: 'Women T Shirt Los Angeles Letter Print Short Sleeve Casual Oversized T Shirts Women Tee Shirts Streetwear Tops Ladies Clothing',
      img: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp'
    },
    {
      id: 2,
      name: 'Men Cotton T Shirt Summer Tops Tom Holland Same Style Tees Casual Print Streetwear Men Women Fashion Brand Teeshirt',
      img: 'https://ae01.alicdn.com/kf/S701721da37254e0fae8f5289eb639e8dM/Men-Cotton-T-Shirt-Summer-Tops-Tom-Holland-Same-Style-Tees-Casual-Print-Streetwear-Men-Women.jpg_Q90.jpg_.webp'
    },
    {
      id: 3,
      name: 'LIGE 2021 New Smart Watch Men Full Touch Screen Sport Fitness Watch IP67 Waterproof Bluetooth For Android ios smartwatch Men+box',
      img: 'https://ae01.alicdn.com/kf/H5deda4a076fc4946808a591f3b2f6554o/LIGE-2021-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP67-Waterproof-Bluetooth-For.jpg_Q90.jpg_.webp'
    },
    {
      id: 4,
      name: 'Xraydisk Sata3 Ssd 60GB 128GB 240GB 120GB 256GB 480GB 500gb 1TB Hdd 2.5 Hard Disk Disc 2.5 " Internal Solid State Drive',
      img: 'https://ae01.alicdn.com/kf/He105fc7001764d3bae6b1f52003d1874b/Xraydisk-Sata3-Ssd-60GB-128GB-240GB-120GB-256GB-480GB-500gb-1TB-Hdd-2-5-Hard-Disk.jpg_Q90.jpg_.webp'
    },
    {
      id: 5,
      name: 'Original Lenovo LP1S TWS Earphone Wireless Bluetooth 5.0 Headphones Waterproof Sport Headsets Noise Reduction Earbuds with Mic',
      img: 'https://ae01.alicdn.com/kf/S83ea1775c0a9455f9e9b045b1ecd7dd1j/Original-Lenovo-LP1S-TWS-Earphone-Wireless-Bluetooth-5-0-Headphones-Waterproof-Sport-Headsets-Noise-Reduction-Earbuds.jpg_Q90.jpg_.webp'
    },
    {
      id: 6,
      name: 'Sandisk Ultra Micro SD 128GB 32GB 64GB 256GB 16G 400GB Micro SD Card SD/TF Flash Card Memory Card 32 64 128 gb microSD for Phone',
      img: 'https://ae01.alicdn.com/kf/S1860889af15a4b97babdfa6a11b966e5i/Sandisk-Ultra-Micro-SD-128GB-32GB-64GB-256GB-16G-400GB-Micro-SD-Card-SD-TF-Flash.jpg_Q90.jpg_.webp'
    }
  ];
  todaysGiftArray = [
    {
      id: 1,
      img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11449-alt?$sfcc_fos_medium$',
      name: 'Emporio Armani',
      sliderImage: [
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11449-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11449-alt?$sfcc_fos_medium$'}
      ],
      title: 'Emporio Armani',
      desc: "Men's Tracksuit Sportswear Sets Casual Baseball Jackets Pants Two Piece Set Outdoor Sport Suit Classic Man Fashion Clothing",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 2,
      img: 'https://fossil.scene7.com/is/image/FossilPartners/MK8939-alt?$sfcc_fos_medium$',
      name: 'Michael Kors',
      sliderImage: [
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/MK8939-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/MK8939-alt?$sfcc_fos_medium$'}
      ],
      title: 'Michael Kors',
      desc: "Men's Tracksuit Sportswear Sets Casual Baseball Jackets Pants Two Piece Set Outdoor Sport Suit Classic Man Fashion Clothing",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 3,
      img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11409-alt?$sfcc_fos_medium$',
      name: 'Michael Kors',
      sliderImage: [
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11409-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11409-alt?$sfcc_fos_medium$'}
      ],
      title: 'Michael Kors',
      desc: "Tommy Hilfiger Men’s Quartz Blue Silicone Strap Blue Dial 46mm Watch 1791474",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 4,
      img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11451-alt?$sfcc_fos_medium$',
      name: 'Emporio Armani',
      sliderImage: [
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11451-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/AR11451-alt?$sfcc_fos_medium$'}
      ],
      title: 'Michael Kors',
      desc: "Fossil Men’s Chronograph Quartz Leather Strap Black Dial 44mm Watch FS528",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 1,
      img: 'https:////fossil.scene7.com/is/image/FossilPartners/MKS8020_main?$sfcc_fos_medium$',
      name: 'Emporio Armani',
      sliderImage: [
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/MKS8020_main?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/MKS8020_main?$sfcc_fos_medium$'}
      ],
      title: 'Emporio Armani',
      desc: "Tommy Hilfiger Men’s Quartz Blue Silicone Strap Blue Dial 46mm Watch 1791474",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 2,
      img: 'https:////fossil.scene7.com/is/image/FossilPartners/SKW6803-alt?$sfcc_fos_medium$',
      name: 'Michael Kors',
      sliderImage: [
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/SKW6803-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/SKW6803-alt?$sfcc_fos_medium$'}
      ],
      title: 'Emporio Armani',
      desc: "Fossil Men’s Chronograph Quartz Leather Strap Black Dial 44mm Watch FS528",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/'
    },
    {
      id: 3,
      img: 'https:////fossil.scene7.com/is/image/FossilPartners/NY2993-alt?$sfcc_fos_medium$',
      sliderImage: [
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/NY2993-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https:////fossil.scene7.com/is/image/FossilPartners/NY2993-alt?$sfcc_fos_medium$'}
      ],
      title: 'Emporio Armani',
      desc: "Tommy Hilfiger Men’s Quartz Blue Silicone Strap Blue Dial 46mm Watch 1791474",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/',
      name: 'DKNY'
    },
    {
      id: 4,
      img: 'https://fossil.scene7.com/is/image/FossilPartners/DZ4587-alt?$sfcc_fos_medium$',
      name: 'Diesel',
      sliderImage: [
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/DZ4587-alt?$sfcc_fos_medium$'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://fossil.scene7.com/is/image/FossilPartners/DZ4587-alt?$sfcc_fos_medium$'}
      ],
      title: 'Emporio Armani',
      desc: "Tommy Hilfiger Men’s Quartz Silicone Strap Black Dial 45mm Watch 1791793",
      discountPrice: 'MNT 44.09',
      originalPrice: 'MNT 99.99',
      brandName: 'FFenglin-joy Store',
      url: 'https://royalwrist.pk/product-category/watches/men-watches/',
    }
  ];
  //Fasion
  fasionArray = [
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/H88369db7556c42d09b60906f4bce6764i/Summer-Mens-Muscle-Hoodie-Vest-Sleeveless-Bodybuilding-Gym-Workout-Fitness-Shirt-High-Quality-Vest-Hip-Hop.jpg_Q90.jpg_.webp',
      name: 'Halocowcow Store',
      desc: "Free shipping stereo bluetooth headphone music headset support SD card with mic for mobile xiaomi iphone sumsamg tablet",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H88369db7556c42d09b60906f4bce6764i/Summer-Mens-Muscle-Hoodie-Vest-Sleeveless-Bodybuilding-Gym-Workout-Fitness-Shirt-High-Quality-Vest-Hip-Hop.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H88369db7556c42d09b60906f4bce6764i/Summer-Mens-Muscle-Hoodie-Vest-Sleeveless-Bodybuilding-Gym-Workout-Fitness-Shirt-High-Quality-Vest-Hip-Hop.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.olx.com.pk/items/q-jerseys'
    },
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/S0a1fbac11e044c7fbfd75d158a074bbfG/Belts-Men-Sports-Car-Luxury-Brand-Designer-Fashion-Automatic-Buckle-Genuine-Leather-Men-s-Jeans-High.jpg_Q90.jpg_.webp',
      name: 'MOWO direct Store',
      desc: "Belts Men Sports Car Luxury Brand Designer Fashion Automatic Buckle Genuine Leather Men's Jeans High Quality Waist Male Strap",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/S0a1fbac11e044c7fbfd75d158a074bbfG/Belts-Men-Sports-Car-Luxury-Brand-Designer-Fashion-Automatic-Buckle-Genuine-Leather-Men-s-Jeans-High.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/S0a1fbac11e044c7fbfd75d158a074bbfG/Belts-Men-Sports-Car-Luxury-Brand-Designer-Fashion-Automatic-Buckle-Genuine-Leather-Men-s-Jeans-High.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.shahzebsaeed.com/product-category/accessories/leather-belts/'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp',
      name: 'MOWO direct Store',
      desc: "HIFI Stereo Earphones Bluetooth Headphone Music Headset FM and Support SD Card with Mic for Mobile XiaoMi Iphone Sumsamg Tablet",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.daraz.pk/headphones-headsets/'
    },
    {
      id: 2,
      img: 'https://ae01.alicdn.com/kf/Hbdc2a3a1f87e4f528fcf8a47f6b4668cK/UNISUIT2021-New-Letter-Printing-Loose-Long-Sweater-Sweatpants-Fashion-Casual-Suit-2-Pcs-Running-Sportwear-Fitness.jpg_Q90.jpg_.webp',
      name: 'Upsport Store',
      desc: "UNISUIT2021 New Letter Printing Loose Long Sweater Sweatpants Fashion Casual Suit 2 Pcs Running Sportwear Fitness Clothing Women",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hbdc2a3a1f87e4f528fcf8a47f6b4668cK/UNISUIT2021-New-Letter-Printing-Loose-Long-Sweater-Sweatpants-Fashion-Casual-Suit-2-Pcs-Running-Sportwear-Fitness.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hbdc2a3a1f87e4f528fcf8a47f6b4668cK/UNISUIT2021-New-Letter-Printing-Loose-Long-Sweater-Sweatpants-Fashion-Casual-Suit-2-Pcs-Running-Sportwear-Fitness.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.clicky.pk/winter-wear?page=1'
    },
    {
      id: 1,
      img: 'https://ae01.alicdn.com/kf/Hb486e84f0bf74cd880ea5e98a45d02168/Women-Graphic-Coffee-Sweet-Girl-Cartoon-Short-Sleeve-Spring-Summer-Lady-Clothes-Tops-Clothing-Tees-Print.jpg_Q90.jpg_.webp',
      name: 'Shop5046320 Store',
      desc: "Women Graphic Coffee Sweet Girl Cartoon Short Sleeve Spring Summer Lady Clothes Tops Clothing Tees Print Female Tshirt T-Shirt",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hb486e84f0bf74cd880ea5e98a45d02168/Women-Graphic-Coffee-Sweet-Girl-Cartoon-Short-Sleeve-Spring-Summer-Lady-Clothes-Tops-Clothing-Tees-Print.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hb486e84f0bf74cd880ea5e98a45d02168/Women-Graphic-Coffee-Sweet-Girl-Cartoon-Short-Sleeve-Spring-Summer-Lady-Clothes-Tops-Clothing-Tees-Print.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.daraz.pk/girls-tops-t-shirts/'
    },
    {
      id: 3,
      img: 'https://ae01.alicdn.com/kf/He15f264c077b41f285691858e6cb6127b/Women-Tops-O-neck-Sexy-Black-Tees-Kiss-Lip-Funny-Summer-Female-Soft-T-Shirt-Lips.jpg_Q90.jpg_.webp',
      name: 'ZEEKA Store',
      desc: "Women Tops O-neck Sexy Black Tees Kiss Lip Funny Summer Female Soft T Shirt Lips Watercolor Graphic T Shirt Top9180",
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/He15f264c077b41f285691858e6cb6127b/Women-Tops-O-neck-Sexy-Black-Tees-Kiss-Lip-Funny-Summer-Female-Soft-T-Shirt-Lips.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H066f7c266e68456b9a7ee648a01d555dP/T-Shirt-Men-Summer-Casual-Short-Sleeve-Shirt-Best-Seller-Men-Clothing-Streetwear-Skull-Print-Graphic.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/He15f264c077b41f285691858e6cb6127b/Women-Tops-O-neck-Sexy-Black-Tees-Kiss-Lip-Funny-Summer-Female-Soft-T-Shirt-Lips.jpg_Q90.jpg_.webp'}
      ],
      title: 'Casual Men Striped Polo-Tshirt  ',
      discountPrice: 'MNT 88.99',
      originalPrice: 'MNT 99.99',
      brandName: 'Peipei Store',
      url: 'https://www.daraz.pk/girls-tops-t-shirts/'
    },
  ];
  //Recipes
  recipeArray = [
    {
      id: 1,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9434751.jpg&w=574&h=384&c=sc&poi=face&q=60',
      offeredByImg: 'https://mimgnews.pstatic.net/image/origin/052/2022/02/01/1696610.jpg?type=nf220_150',
      offeredByName: 'By Fioa',
      desc: 'Basic Sheet Pan Chicken Sausage and Roasted Cabbage',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9434751.jpg&w=574&h=384&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9434751.jpg&w=574&h=384&c=sc&poi=face&q=60'}
      ],
      title: 'California Melt',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 2,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F23%2FGolden-Chicken-2000.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp',
      offeredByName: 'By Chef John',
      desc: 'Chef John cooks chicken legs low and slow, resulting in fall-off-the-bone meat',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F23%2FGolden-Chicken-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F23%2FGolden-Chicken-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Vegan Coconut-Lentil Curry with Sweet Potatoes',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 3,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3478412.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp',
      offeredByName: 'By Jennifer Torrey',
      desc: 'This is a recipe that we have made in our family for many years--everyone loves',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3478412.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3478412.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Royal Rhubarb Crisp',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 4,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1645318150DSC_1989203-2000.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp',
      offeredByName: 'By Kim',
      desc: 'Tart and sweet with beautiful color and bake shop appeal, these lemony',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1645318150DSC_1989203-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1645318150DSC_1989203-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Radish Salad with Peas',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    }
  ];
  seaosnalRecipe = [
    {
      id: 3,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9090841.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
      offeredByName: 'By Lucifer ',
      desc: "They're portable, sort of like a mini pizza, except shaped like a cupcake",
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9090841.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9090841.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Taco Meat',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 4,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F03%2FUkrainian-Red-Borscht-Soup.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://play-lh.googleusercontent.com/TvHNOCXV1TnZe__sUmNUdAZzC17BZGRSsC30PN-lRIDCtLPC7D1KpYZMY5W7V8_GyTA=s180-rw',
      offeredByName: 'By Patti',
      desc: "My friend's mother from Ukraine taught me this recipe for the classic beet soup",
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F03%2FUkrainian-Red-Borscht-Soup.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F03%2FUkrainian-Red-Borscht-Soup.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Greek Chicken and Potato Bowl',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    }
  ];
  moreRecipeArray = [
    {
      id: 1,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F02%2F25%2F1111973-Beef-and-Guinness-Stew-Photo-by-Vick-Chick-2000.jpg&w=300&h=300&c=sc&poi=face&q=60',
      offeredByImg: 'https://mimgnews.pstatic.net/image/origin/052/2022/02/01/1696610.jpg?type=nf220_150',
      offeredByName: 'By Fioa',
      desc: 'Basic Sheet Pan Chicken Sausage and Roasted Cabbage',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F02%2F25%2F1111973-Beef-and-Guinness-Stew-Photo-by-Vick-Chick-2000.jpg&w=300&h=300&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F02%2F25%2F1111973-Beef-and-Guinness-Stew-Photo-by-Vick-Chick-2000.jpg&w=300&h=300&c=sc&poi=face&q=60'}
      ],
      title: 'Easy Shrimp and Asparagus Quiche',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 2,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1020197.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/S1d5565776f86445981bcb48c0f1657dal/Women-T-Shirt-Los-Angeles-Letter-Print-Short-Sleeve-Casual-Oversized-T-Shirts-Women-Tee-Shirts.jpg_Q90.jpg_.webp',
      offeredByName: 'By Chef John',
      desc: 'Chef John cooks chicken legs low and slow, resulting in fall-off-the-bone meat',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1020197.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1020197.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Chef John\'s Greek-Style Beef Stew',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 3,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1967016.jpg&w=272&h=272&c=sc&poi=%5B240%2C518%5D&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/H956a9719d1c746febfd3e9fff40d8f23g/Long-Sleeve-Men-T-shirt-Turtleneck-Men-Pullover-Soft-Blouse-Solid-Color-Stretchy-Knitted-Shirt-Men.jpg_Q90.jpg_.webp',
      offeredByName: 'By Jennifer Torrey',
      desc: 'This is a recipe that we have made in our family for many years--everyone loves',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1967016.jpg&w=272&h=272&c=sc&poi=%5B240%2C518%5D&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1967016.jpg&w=272&h=272&c=sc&poi=%5B240%2C518%5D&q=60'}
      ],
      title: 'Mojo Roast Chicken (Pollo Asado)',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    },
    {
      id: 4,
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F22180-waffles-mfs-82.jpg&w=272&h=272&c=sc&poi=face&q=60',
      offeredByImg: 'https://ae01.alicdn.com/kf/Hf2f55eb6c47b4d2b81a981e3e5344d6c4/Men-Summer-Tracksuit-Sets-Fashion-Sweat-Suit-3D-Print-Oversized-Short-Sleeve-Shirts-T-shirt-Sets.jpg_Q90.jpg_.webp',
      offeredByName: 'By Kim',
      desc: 'Tart and sweet with beautiful color and bake shop appeal, these lemony',
      sliderImage: [
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F22180-waffles-mfs-82.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F17%2FGreek-Style-Beef-Stew-2000.jpg&w=272&h=272&c=sc&poi=face&q=60'},
        {img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F22180-waffles-mfs-82.jpg&w=272&h=272&c=sc&poi=face&q=60'}
      ],
      title: 'Mexican Capirotada',
      discountPrice: null,
      originalPrice: null,
      discount: null,
      url: 'https://www.allrecipes.com/'
    }
  ];
  bestSellerArray = [
    {
      id: 1,
      img: 'https://www.libertybooks.com/image/cache/./The-Gaze-(PB)-313x487.jpg?q6',
      offerBy: 'Tamim Ansary',
      title: 'Destiny Disrupted A History Of The World Through Islamic Eyes',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
    {
      id: 2,
      img: 'https://www.libertybooks.com/image/cache/catalog/Guinness-World-Records-2020-313x487.jpg?q6',
      offerBy: 'Guinness World Records',
      title: 'Guinness World Records 2020',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
    {
      id: 3,
      img: 'https://www.libertybooks.com/image/cache/catalog/9781786541529-313x487.jpg?q6',
      offerBy: 'Alexandra Bracken',
      title: 'Lore',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
    {
      id: 6,
      img: 'https://www.libertybooks.com/image/cache/catalog/shahaab-namah-9789693517552-313x487.jpg?q6',
      offerBy: 'Qudratullah Sabahb',
      title: 'Shahaab Namah',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
    {
      id: 5,
      img: 'https://www.libertybooks.com/image/cache/catalog/9781471407277-313x487.jpg?q6',
      offerBy: 'Holly Black',
      title: 'The Cruel Prince (The Folk Of The Air)',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
    {
      id: 10,
      img: 'https://www.libertybooks.com/image/cache/catalog/01.zeeshan/9789693515879-313x487.jpg?q6',
      offerBy: 'Ashfaq Ahmad',
      title: 'Zavia',
      desc: 'Read fully about the history of Russia, economy of Russia. The rise and fall of the country and much more. By very popular Leo Shan Li Don.',
      discountPrice: '40 MNT',
      originalPrice: '50 MNT',
      discount: '10%',
      url: 'https://www.libertybooks.com/'
    },
  ];
  livingArray = [
    {
      id: 2,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/img_3427_1.jpg?itok=VVRwhRRP',
      price: '780,000,000 MNT',
      desc: "FOR SALE: 2 bedrooms apartment next to Choijin Lama temple museum"
    },
    {
      id: 1,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/front.png?itok=iVdmi1gF',
      price: '5,500,000 MNT',
      desc: "In the hearth of the city! Beautiful office space for sale in Business Tower"
    },
    {
      id: 3,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/unnameddcdcnlke.jpeg?itok=aFXj4WYS',
      price: '900,000,000 MNT',
      desc: "GREAT VIEW! FULLY FURNISHED, COMFORTABLE SINGLE HOUSE AT ZAMBULIN VILLAGE"
    },
    {
      id: 2,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/1064074e8891ca3d348ef55247230c13.jpg?itok=67HOESCk',
      price: '1,800,000,000 MNT',
      desc: "FOR SALE : DUPLEX APARTMENT AT BELLA VISTA 100"
    },
    {
      id: 1,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/20210818_142004_1.jpg?itok=n1ql7LJv',
      price: '982,600,000 MNT',
      desc: "FOR SALE: GORGEOUS 4 BEDROOM APARTMENT IS FOR SALE AT GOLDEN BUDDHA"
    },
    {
      id: 3,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/img_0421.jpg?itok=Yd7ZiHZ7',
      price: '2,691,000,000 MNT',
      desc: "FOR SALE: ALLEGRO MUSIC SCHOOL AT RIVER GARDEN"
    },
    {
      id: 2,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/img_9946.jpg?itok=VfRgUIDC',
      price: '170,000,000 MNT',
      desc: "Spacious townhouse is for rent at Tenger Villa"
    },
    {
      id: 1,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/uildver3_0.jpg?itok=g0PYJQug',
      price: '480,000,000 MNT',
      desc: "ONE THE SEOUL STREET, 3 BEDROOM APARTMENT IS FOR SALE"
    },
    {
      id: 3,
      img: 'https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/85b3846e-7771-465c-9dcc-5f5aede24fc4.jpg?itok=Mg95lIgg',
      price: '793,000,000 MNT',
      desc: "THE PERFECT INVESTMENT. 2 BEDROOM APARTMENT FOR SALE IN PARLAMENT TOWN."
    },
  ];
  grocerySlider = [
    {
      id: 1,
      img: 'https://cdn.metro-online.pk/dashboard/images/1424040475.jpg',
    },
    {
      id: 2,
      img: 'https://cdn.metro-online.pk/dashboard/images/1563711481.jpg',
    },
    {
      id: 3,
      img: 'https://cdn.metro-online.pk/dashboard/images/1289850740.jpg',
    },
    {
      id: 4,
      img: 'https://cdn.metro-online.pk/dashboard/images/67117743.jpg',
    },
    {
      id: 5,
      img: 'https://cdn.metro-online.pk/dashboard/images/259898322.jpg',
    },
    {
      id: 6,
      img: 'https://cdn.metro-online.pk/dashboard/images/178296415.jpg',
    },
  ]
  groceryArray = [
    {
      id: 1,
      // img: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620095-0-M.jpg?11',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9090841.jpg&w=272&h=272&c=sc&poi=face&q=60',
      name_quantity: 'Coca-Cola 1.5 Litre X 6',
      price: 575,
      availability: 'In Stock',
    },
    {
      id: 2,
      // img: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12634801-0-M.jpg?',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9434751.jpg&w=574&h=384&c=sc&poi=face&q=60',
      name_quantity: 'Nestle Milo Activ-Go Powder 500GM',
      price: 382,
      availability: 'In Stock',
    },
    {
      id: 3,
      // img: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12623144-0-M.jpg?10',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F23%2FGolden-Chicken-2000.jpg&w=272&h=272&c=sc&poi=face&q=60',
      name_quantity: 'Fanta 500ML X 12',
      price: 252,
      availability: 'In Stock',
    },
    {
      id: 4,
      // img: 'https://metro-online.pk/dashboard/prod-pic/LHE-01262/12621273-0-M.jpg?5',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F02%2F25%2F1111973-Beef-and-Guinness-Stew-Photo-by-Vick-Chick-2000.jpg&w=300&h=300&c=sc&poi=face&q=60',
      name_quantity: 'Rossmoor Instant Yeast 33 GM',
      price: 100,
      availability: 'In Stock',
    },
    {
      id: 5,
      // img: 'https://metro-online.pk/dashboard/prod-pic/LHE-01262/12639916-0-M.jpg?6',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1020197.jpg&w=272&h=272&c=sc&poi=face&q=60',
      name_quantity: 'Bakea Baking Powder 100g',
      price: 83,
      availability: 'In Stock',
    },
    {
      id: 6,
      // img: 'https://metro-online.pk/dashboard/prod-pic/LHE-01262/12637994-0-M.jpg?7',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F1967016.jpg&w=272&h=272&c=sc&poi=%5B240%2C518%5D&q=60',
      name_quantity: "Chef's Choice ChocoXpress Cooking Dark Chocolate 2KG",
      price: 1280,
      availability: 'In Stock',
    },
    {
      id: 7,
      // img: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12639925-0-S.jpg?1',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F22180-waffles-mfs-82.jpg&w=272&h=272&c=sc&poi=face&q=60',
      name_quantity: 'Bakea Chocolate Fudge Brownie Mix 480g',
      price: 442,
      availability: 'In Stock',
    },
    {
      id: 8,
      // img: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12639962-0-S.jpg?8',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1020197.jpg&w=272&h=272&c=sc&poi=face&q=60',
      name_quantity: "American Garden Pancake Syrup 24 OZ",
      price: 222,
      availability: 'In Stock',
    },
  ];
  ringsArray = [
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_1-1375898994290.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_1-1375898994290.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_1-1375898994290.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "RING SNOWFLAKE ZIRCON - SIZE 11 GOLD-CL",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '3%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33408_1-837921944816.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33408_1-837921944816.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33408_1-837921944816.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "RING WIDE FINE LINE - SIZE 17 SILVER-CLEAR",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '10%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33333_1-1097633599484.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33333_1-1097633599484.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33333_1-1097633599484.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "RING SNOWFLAKE ZIRCON - SIZE 15 GOLD-C",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '14%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33412_1-1568750322900.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33412_1-698295647465.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33412_1-698295647465.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "RING MICRO ZC FANCY - SIZE 13 SILVER-CL",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '9%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33356_1-1459038737110.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33356_2-1565857014692.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33356_2-1565857014692.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "INTERTWINED PAVE RING - SIZE 17 GOLD-CLEAR",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '40%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33336_1-501575744083.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33336_1-501575744083.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33336_1-501575744083.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "TRI-LINED SOLITAIRE RING - SIZE 13 GOLD-CL",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '1%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33380_1-213460624778.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33380_1-213460624778.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33380_1-213460624778.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "CROSSOVER SOLITAIRE RING - SIZE 15 GOLD",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '1%',
      url: 'https://www.tesoro.pk/search/rings'
    },
    {
      id: 8,
      img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33361_1-187509087143.jpg',
      sliderImage: [
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33361_1-187509087143.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33361_1-187509087143.jpg'}
      ],
      title: 'Rings & Rings',
      desc: "CROSSOVER SOLITAIRE RING - SIZE 15 GOLD",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '7%',
      url: 'https://www.tesoro.pk/search/rings'
    }
  ];
  headphonesArray = [
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp'},
        {img: 'https://d24mf1as2csgn7.cloudfront.net/product/600x600/07092021/33389_2-1169481799696.jpg'},
        {img: 'https://ae01.alicdn.com/kf/Hb37dfa882ea94450875fc3f92312f77fK/HIFI-Stereo-Earphones-Bluetooth-Headphone-Music-Headset-FM-and-Support-SD-Card-with-Mic-for-Mobile.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "HIFI Stereo Earphones Bluetooth Headphone Music Headset FM and Support SD Card with Mic for Mobile XiaoMi Iphone Sumsamg Tablet",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '3%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/HTB133Uan8DH8KJjSszcq6zDTFXaL/AYVVPII-Best-earphones-Wireless-Stereo-Bluetooth-Headphones-Built-in-Mic-Soft-Earmuffs-Sports-Headset-BASS-for.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/HTB133Uan8DH8KJjSszcq6zDTFXaL/AYVVPII-Best-earphones-Wireless-Stereo-Bluetooth-Headphones-Built-in-Mic-Soft-Earmuffs-Sports-Headset-BASS-for.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/HTB1zZwhox6I8KJjSszfq6yZVXXaK/AYVVPII-Best-earphones-Wireless-Stereo-Bluetooth-Headphones-Built-in-Mic-Soft-Earmuffs-Sports-Headset-BASS-for.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/HTB133Uan8DH8KJjSszcq6zDTFXaL/AYVVPII-Best-earphones-Wireless-Stereo-Bluetooth-Headphones-Built-in-Mic-Soft-Earmuffs-Sports-Headset-BASS-for.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "AYVVPII Best earphones Wireless Stereo Bluetooth Headphones Built-in Mic Soft Earmuffs Sports Headset BASS for ios and Android",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '10%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H5586e24bc3bc494c9da3f431dd4b4571h/Headsets-Gamer-Headphones-Blutooth-Surround-Sound-Stereo-Wireless-Earphone-USB-With-MicroPhone-Colourful-Light-PC-Laptop.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H5586e24bc3bc494c9da3f431dd4b4571h/Headsets-Gamer-Headphones-Blutooth-Surround-Sound-Stereo-Wireless-Earphone-USB-With-MicroPhone-Colourful-Light-PC-Laptop.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H71694241416a4f8dbc35a708ea2b29e9C/Headsets-Gamer-Headphones-Blutooth-Surround-Sound-Stereo-Wireless-Earphone-USB-With-MicroPhone-Colourful-Light-PC-Laptop.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H5586e24bc3bc494c9da3f431dd4b4571h/Headsets-Gamer-Headphones-Blutooth-Surround-Sound-Stereo-Wireless-Earphone-USB-With-MicroPhone-Colourful-Light-PC-Laptop.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "Headsets Gamer Headphones Blutooth Surround Sound Stereo Wireless Earphone USB With MicroPhone Colourful Light PC Laptop Headset.",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '14%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H1ca61d3c18674f8ab07c10a37ad1c66cB/Wireless-Headphones-Bluetooth-Noise-Cancellation-Headsets-Stereo-Sound-Heavy-Bass-Earphones-for-Phone-PC-gaming-headset.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H1ca61d3c18674f8ab07c10a37ad1c66cB/Wireless-Headphones-Bluetooth-Noise-Cancellation-Headsets-Stereo-Sound-Heavy-Bass-Earphones-for-Phone-PC-gaming-headset.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H1ca61d3c18674f8ab07c10a37ad1c66cB/Wireless-Headphones-Bluetooth-Noise-Cancellation-Headsets-Stereo-Sound-Heavy-Bass-Earphones-for-Phone-PC-gaming-headset.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H1ca61d3c18674f8ab07c10a37ad1c66cB/Wireless-Headphones-Bluetooth-Noise-Cancellation-Headsets-Stereo-Sound-Heavy-Bass-Earphones-for-Phone-PC-gaming-headset.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "Wireless Headphones Bluetooth Noise-Cancellation Headsets Stereo Sound Heavy Bass Earphones for Phone PC gaming headset on Head.",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '9%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hc0f09ef3fcf7459c99fbf39fba2d87c2C/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "JBL T500BT Wireless Bluetooth Headphone Deep Bass Sound Sports Game Headset with Mic Noise Canceling Foldable Earphones. ",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '40%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H83239a0a334745f2943a8bc7f80ba211V/Subwoofer-Wired-Gaming-Headset-Hifi-Sound-Quality-Foldable-Portable-3-5mm-Plug-Suitable-For-Pc-Game.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H83239a0a334745f2943a8bc7f80ba211V/Subwoofer-Wired-Gaming-Headset-Hifi-Sound-Quality-Foldable-Portable-3-5mm-Plug-Suitable-For-Pc-Game.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H83239a0a334745f2943a8bc7f80ba211V/Subwoofer-Wired-Gaming-Headset-Hifi-Sound-Quality-Foldable-Portable-3-5mm-Plug-Suitable-For-Pc-Game.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H83239a0a334745f2943a8bc7f80ba211V/Subwoofer-Wired-Gaming-Headset-Hifi-Sound-Quality-Foldable-Portable-3-5mm-Plug-Suitable-For-Pc-Game.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "Subwoofer Wired Gaming Headset Hifi Sound Quality Foldable Portable 3.5mm Plug, Suitable For Pc Game host All Smartphones",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '1%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H9fb17a6146cb4dbc94ded9fd25f35dc7x/CATASSU-Earphone-Bluetooth-Headphones-Over-Ear-Stereo-Wireless-Headset-Soft-Leather-Earmuffs-Built-in-Mic-for.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H9fb17a6146cb4dbc94ded9fd25f35dc7x/CATASSU-Earphone-Bluetooth-Headphones-Over-Ear-Stereo-Wireless-Headset-Soft-Leather-Earmuffs-Built-in-Mic-for.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H8a5939707bf64282a3009cffb5f40d40C/CATASSU-Earphone-Bluetooth-Headphones-Over-Ear-Stereo-Wireless-Headset-Soft-Leather-Earmuffs-Built-in-Mic-for.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H9fb17a6146cb4dbc94ded9fd25f35dc7x/CATASSU-Earphone-Bluetooth-Headphones-Over-Ear-Stereo-Wireless-Headset-Soft-Leather-Earmuffs-Built-in-Mic-for.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "CATASSU Earphone Bluetooth Headphones Over Ear Stereo Wireless Headset Soft Leather Earmuffs Built-in Mic for PC/Cell Phones/TV",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '1%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearch'
    },
    {
      id: 8,
      img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp',
      sliderImage: [
        {img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/Hc0f09ef3fcf7459c99fbf39fba2d87c2C/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'},
        {img: 'https://ae01.alicdn.com/kf/H592c1404ce694fa698430f6e2a8b915d7/JBL-T500BT-Wireless-Bluetooth-Headphone-Deep-Bass-Sound-Sports-Game-Headset-with-Mic-Noise-Canceling-Foldable.jpg_Q90.jpg_.webp'}
      ],
      title: 'Rings & Rings',
      desc: "JBL T500BT Wireless Bluetooth Headphone Deep Bass Sound Sports Game Headset with Mic Noise Canceling Foldable Earphones",
      discountPrice: 'MNT 2,385',
      originalPrice: 'MNT 44000',
      brandName: 'FFenglin-joy Store',
      discount: '40%',
      url: 'https://www.aliexpress.com/item/32857666780.html?spm=a2g0o.productlist.0.0.24609aab3qdVV0&algo_pvid=da3c96ea-1390-4997-a527-603e80459969&algo_exp_id=da3c96ea-1390-4997-a527-603e80459969-3&pdp_ext_f=%7B%22sku_id%22%3A%2210000000759898099%22%7D&pdp_pi=-1%3B2337.02%3B-1%3B-1%40salePrice%3BPKR%3Bsearch-mainSearchw'
    },
  ];
  //QPOSTS Data
  postCategories = [
    {
      id: 1,
      name: 'Sports'
    },
    {
      id: 2,
      name: 'Cars'
    },
    {
      id: 3,
      name: 'WebTycoon'
    },
    {
      id: 4,
      name: 'Economy'
    },
    {
      id: 5,
      name: 'Living'
    },
    {
      id: 6,
      name: 'Formula'
    }
  ];
  qpostlayout1Data = [
    {
      id: 1,
      coverImg: 'https://post-phinf.pstatic.net/MjAxOTAzMDVfMjgz/MDAxNTUxNzcwMjIxNDI4.DQ9ui6NvP_86q8zVwSVnr0TTAWBCg6B6b6HgpjsPM0sg.BtXQpPITF0OvCl3qoQitbIw1YbHg4_up7Vy8dioW-A4g.JPEG/post_7881405136509488111.jpg?type=f218_218',
      profileImg: 'https://post-phinf.pstatic.net/MjAxODA3MTBfMTY3/MDAxNTMxMjA2NDk1NTcw.EcYomXN-DB5N-u5PeQ9cwfdFHSKn9nNCymAAG81Nxbog.sRhQ40atYJgAalFv8qJ-CyK0DKQ_NhAKJgJZONmn0Z8g.JPEG/post_2841694717267405050.jpg?type=ff120_120',
      name: 'Date Pop',
      desc: 'Dating Pop is an amazing platform where you can meet with different people',
      category: 'Restaurant',
    },
    {
      id: 2,
      coverImg: 'https://post-phinf.pstatic.net/MjAxODA3MDRfMjYw/MDAxNTMwNjk1OTA1NTkx.c6QmE7_3d0c7_TQpqVFGN8igOKGrScyddgxrHCsvhaEg.rDJkormJFRryw9KeXeHleZ1v0gVkNi5NiXTAJ-_bn88g.JPEG/post_2670112773392790947.jpg?type=f218_218',
      profileImg: 'https://post-phinf.pstatic.net/MjAxODA0MDRfMTc3/MDAxNTIyODEzNjE1MTEx.5io_divYp5ZUjOMAhuzMyAYfPGG4ZjHd9jnMoNT31kog.gdihe9PbXCve8lx2uy3asEXUG_nqubrOBv-bFgbXRDog.JPEG/post_2135982390514368687.jpg?type=ff120_120',
      name: 'Visual Dive',
      desc: 'An emotional blogger who likes to participate in several activites',
      category: 'Recipe/Food',
    },
    {
      id: 3,
      coverImg: 'https://post-phinf.pstatic.net/MjAxODA0MjdfMjkx/MDAxNTI0ODEzNDg1NTIz.3rRj8Ot41tSRMgJououQg8rTJz3c1pjI2bm79x33m9wg.Mc0VwX02r9Lcoo1bI9ESCS0Tl_2UUXSazkyO9NR8vwEg.JPEG/post_6883709031275686367.jpg?type=f218_218',
      profileImg: 'https://post-phinf.pstatic.net/20150415_89/hu_daily_1429084534776Mda5b_JPEG/hu_daily_5337224475319910301.jpg?type=ff120_120',
      name: 'Daily',
      desc: 'Pick your best post and get a chance to win exciting prizes',
      category: 'Recipe/Food',
    },
    {
      id: 4,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMTAzMDNfMjcx/MDAxNjE0NzYxMTE3OTI1.ShMQfh3naoafWREL-isN8CKDne7Hhytz92v15Z9Nh-wg.MpGbcyPhVQ0CKMzI8ZNF5-kbTdAR-Bo5ZNg7QbdoKg8g.JPEG/post_2246468953345867206.jpg?type=f218_218',
      profileImg: 'https://post-phinf.pstatic.net/MjAxOTAxMDVfMjQ1/MDAxNTQ2NjE5ODIyNDc3.Z8szAJ_7RcyxT8sNDHAyePaMnJEAMqbc7aF9jJ6yC64g.vXLshSK1ODEkXQudLHK0MYsoOIDFDcsfxrH6IJcp5S8g.GIF/post_3934021379626885012.gif?type=ff120_120',
      name: 'sun-drenched house',
      desc: 'An emotional blogger who likes to participate in several activites',
      category: 'Recipe/Food',
    },
    {
      id: 5,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMjA1MTBfMjU1/MDAxNjUyMTUxNTU4Mjkw.blSdimrJkxZWvuT9ItCIBP2GchDAv7QfF9Ulc8zu9pUg.Ayy-svH5wfo365XeJM9GdCGx_D8lMzTeb2y_kMIO3xwg.GIF/post_8244935112683384501.gif?type=f218_218',
      profileImg: 'https://post-phinf.pstatic.net/MjAyMjAyMDdfMTYx/MDAxNjQ0MjEzMTAwNDM2.HicES85mtyHpdSHfu0IunyhmWY2EgpOPsJvVV2iCb2Eg.Z3GpAcqF7q2KxNHBOcOSPN_qpDvsYoTJSXBA6ZEaTecg.PNG/post_208664858258375360.png?type=ff120_120',
      name: 'Hola',
      desc: 'Mr. previous life, a one person house.',
      category: 'Restaurant',
    },
    {
      id: 1,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMjA1MTZfMTkw/MDAxNjUyNjc3NTMwODQ4.jfJF0NOxoAz6Ck5L2_6c3KwNes431tj56FJUAviZnDkg.Mu6F9TX517yRPNIKVE-GpqyBY6ypxFNxpT5UoenuKUMg.JPEG/IAAyQ96Hq31mYFpKcMyGGN15bDoA.jpg?type=fb500_195',
      profileImg: 'https://post-phinf.pstatic.net/MjAyMjA2MDNfMTcx/MDAxNjU0MjE5MjY5MjY5.nWoKCrnXf6aiFlg4oww8IsGg8iB02Z-5lp4_tGkEBGkg.lqKpzBhN3NaGPocrXcdCXUc6M8D-RQbBHB2UXAXYJTIg.PNG/I6-tXwsV2pkbUANIk7BOifHbr1BM.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Date Pop',
      desc: 'Dating Pop is an amazing platform where you can meet with different people'
    },
    {
      id: 2,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMDA2MDVfMjA4/MDAxNTkxMzMzNjI2ODYy.33rcp6SmT1774LtG9zGTFJuaRPF-XOoJv-SQy-Nb3H0g.ySSTNzJDv_IZosnx9OXRuKwqnnBAzhbXD-z84kKg488g.PNG/IOY4YTkXh_heDXdDbryn7XH3DsJw.jpg?type=fb500_195',
      profileImg: 'https://post-phinf.pstatic.net/MjAyMjA2MDVfMjE0/MDAxNjU0NDE4MDAyNTYy.lwTl72JkKqSRa2KVispgT0gA_H4cL1WG70AE8NGkeqwg.tXzOU9DAhdTKMsnF03ekkgSNwmTpIhqaACfroshtNhQg.JPEG/IPjv8hO-uKTVjV4-2ilSvPqX5oUw.jpg?type=fb500_195',
      category: 'Restaurant',
      name: 'Hola',
      desc: 'Breadsooni\'s Daejeon Seongsimdang recommended bread list, cake price summary!'
    },
    {
      id: 3,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMDA4MTJfMjYg/MDAxNTk3MjEzNzE5NjAx.1RwhSsdoo-O4_x68fXE7pTYDmAnK681IAJB8Gz6s0Fgg.I_4pIczTVoITVYqHFxIMvLfBnkHxQ52SJVAwa3AEKAEg.JPEG/IOyyg_TQJvWl85SZbriVK4Taln_k.jpg?type=fb500_195',
      profileImg: 'https://post-phinf.pstatic.net/MjAxOTAzMDRfNTMg/MDAxNTUxNjg5MzE0NDE5.hT4yQmHHUMdoM4DbBN95hcvcQ1spgwt58vAmW3_KrXog.IlcVeSDgxJQ5Jpy20l9GNhD62Oypt98os3on971wNBQg.JPEG/post_323040021276812230.jpg?type=f218_218',
      category: 'Recipe/Food',
      name: 'Women Sense',
      desc: 'Make a side dish you can eat for a long time with 10,000 won! '
    },
    {
      id: 4,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMDA2MTZfODAg/MDAxNTkyMjc5MTcxODk3.XdsVRl85MT2UmG21G8EKOyaBhFe-k_AELfkrn0HK-8Qg.JgcJ5WjY7r-MSWjeatNoPYvMwi6tv4V4sWS11wsRqzYg.JPEG/I-tDXRiZPuG94x4N2aFGW_OXTKdc.jpg?type=fb500_195',
      profileImg: 'https://post-phinf.pstatic.net/MjAyMTAzMjJfMTkw/MDAxNjE2MzQyMzM2Nzgx.GzrEESQH9A7X42f0bCagOTTZIn9rmUpsSuaXpytQ0T8g.Q4Cfhht6lJ7l6a3xu_KKesDMB1Oi1v_n8BnJPrB5hgcg.PNG/post_281414715577121623.png?type=ff120_120',
      category: 'Recipe/Food',
      name: 'Weather News',
      desc: 'Welcome~ Is this your first time in Korea? '
    },
    {
      id: 5,
      coverImg: 'https://post-phinf.pstatic.net/MjAyMDA0MzBfMjUg/MDAxNTg4MTg2Mjc2OTM1.UjIT_PnbuLTbKrndvqEeWhJtD2etW1whUVPzWnWEeYEg.xTcRcZHNmIFBfvnIiAxoxVUlzDHjiE579XF6cUujHOIg.PNG/ItgaLsKTw-2yEdan8DHTIajfQQXE.jpg?type=fb500_195',
      profileImg: 'https://post-phinf.pstatic.net/MjAyMjA2MDdfMyAg/MDAxNjU0NTQ3MjA0ODM4.Fk0KTsyl5YDCVc74PTkYak3LkrXuTmUhkuLleiy2ZfUg.hHSU4Y5_gKgsh_EojQ97CnFmu4-3GgTjk1j0at6wyxIg.JPEG/IFrTrEvPQ9W6oK05XCd2_0FYdZtM.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Date Pop',
      desc: 'A collection of cheap restaurants in Famiest Station'
    },
  ];
  qpostlayout1Section2Data = [
    {
      id: 1,
      img: 'https://post-phinf.pstatic.net/MjAyMjA1MTZfMTkw/MDAxNjUyNjc3NTMwODQ4.jfJF0NOxoAz6Ck5L2_6c3KwNes431tj56FJUAviZnDkg.Mu6F9TX517yRPNIKVE-GpqyBY6ypxFNxpT5UoenuKUMg.JPEG/IAAyQ96Hq31mYFpKcMyGGN15bDoA.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Date Pop',
      title: 'Dating Pop is an amazing platform where you can meet with different people'
    },
    {
      id: 2,
      img: 'https://post-phinf.pstatic.net/MjAyMDA2MDVfMjA4/MDAxNTkxMzMzNjI2ODYy.33rcp6SmT1774LtG9zGTFJuaRPF-XOoJv-SQy-Nb3H0g.ySSTNzJDv_IZosnx9OXRuKwqnnBAzhbXD-z84kKg488g.PNG/IOY4YTkXh_heDXdDbryn7XH3DsJw.jpg?type=fb500_195',
      category: 'Restaurant',
      name: 'Hola',
      title: 'Breadsooni\'s Daejeon Seongsimdang recommended bread list, cake price summary!'
    },
    {
      id: 3,
      img: 'https://post-phinf.pstatic.net/MjAyMDA4MTJfMjYg/MDAxNTk3MjEzNzE5NjAx.1RwhSsdoo-O4_x68fXE7pTYDmAnK681IAJB8Gz6s0Fgg.I_4pIczTVoITVYqHFxIMvLfBnkHxQ52SJVAwa3AEKAEg.JPEG/IOyyg_TQJvWl85SZbriVK4Taln_k.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Women Sense',
      title: 'Make a side dish you can eat for a long time with 10,000 won! '
    },
    {
      id: 4,
      img: 'https://post-phinf.pstatic.net/MjAyMDA2MTZfODAg/MDAxNTkyMjc5MTcxODk3.XdsVRl85MT2UmG21G8EKOyaBhFe-k_AELfkrn0HK-8Qg.JgcJ5WjY7r-MSWjeatNoPYvMwi6tv4V4sWS11wsRqzYg.JPEG/I-tDXRiZPuG94x4N2aFGW_OXTKdc.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Weather News',
      title: 'Welcome~ Is this your first time in Korea? '
    },
    {
      id: 5,
      img: 'https://post-phinf.pstatic.net/MjAyMDA0MzBfMjUg/MDAxNTg4MTg2Mjc2OTM1.UjIT_PnbuLTbKrndvqEeWhJtD2etW1whUVPzWnWEeYEg.xTcRcZHNmIFBfvnIiAxoxVUlzDHjiE579XF6cUujHOIg.PNG/ItgaLsKTw-2yEdan8DHTIajfQQXE.jpg?type=fb500_195',
      category: 'Recipe/Food',
      name: 'Date Pop',
      title: 'A collection of cheap restaurants in Famiest Station'
    },
  ];
  commentsArray = [
    {
      id: 1,
      img: 'https://post-phinf.pstatic.net/MjAyMDA2MTZfODAg/MDAxNTkyMjc5MTcxODk3.XdsVRl85MT2UmG21G8EKOyaBhFe-k_AELfkrn0HK-8Qg.JgcJ5WjY7r-MSWjeatNoPYvMwi6tv4V4sWS11wsRqzYg.JPEG/I-tDXRiZPuG94x4N2aFGW_OXTKdc.jpg?type=fb500_195',
      name: 'Bob builders',
      comment: 'Its very good.. i am loving using this application',
      created_at: '2022-05-06T08:22:59.000000Z'
    },
    {
      id: 2,
      img: 'https://post-phinf.pstatic.net/MjAyMDA0MzBfMjUg/MDAxNTg4MTg2Mjc2OTM1.UjIT_PnbuLTbKrndvqEeWhJtD2etW1whUVPzWnWEeYEg.xTcRcZHNmIFBfvnIiAxoxVUlzDHjiE579XF6cUujHOIg.PNG/ItgaLsKTw-2yEdan8DHTIajfQQXE.jpg?type=fb500_195',
      name: 'Hopes Shy',
      comment: 'Perfect information, that\'s the thing that i was looking for',
      created_at: '2022-05-06T08:22:59.000000Z'
    },
    {
      id: 3,
      img: 'https://post-phinf.pstatic.net/MjAyMDA4MTJfMjYg/MDAxNTk3MjEzNzE5NjAx.1RwhSsdoo-O4_x68fXE7pTYDmAnK681IAJB8Gz6s0Fgg.I_4pIczTVoITVYqHFxIMvLfBnkHxQ52SJVAwa3AEKAEg.JPEG/IOyyg_TQJvWl85SZbriVK4Taln_k.jpg?type=fb500_195',
      name: 'Dabid Doms',
      comment: 'Thank You!',
      created_at: '2022-05-06T08:22:59.000000Z'
    },
  ];
  allPress = [
    {id: 1, name: 'Boomeerang', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/032/2018/10/11/logo_032_37_20181011174011.png'},
    {id: 1, name: 'Kookmin Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/005/2017/10/18/logo_005_37_20171018162118.png'},
    {id: 1, name: 'Dong-A Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/020/2018/10/31/logo_020_37_20181031180931.png'},
    {id: 1, name: 'Munhwa Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/021/2017/10/18/logo_021_37_20171018162618.png'},
    {id: 1, name: 'Seoul Newspaper', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/081/2017/10/18/logo_081_37_20171018163018.png'},
    {id: 1, name: 'Segye Daily', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/022/2017/10/18/logo_022_37_20171018162618.png'},
    {id: 1, name: 'Chosun Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/023/2020/05/04/logo_023_37_20200504141904.png'},
    {id: 1, name: 'JoongAng Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/025/2021/08/20/logo_025_37_20210820165849.png'},
    {id: 1, name: 'Hankyoreh', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/028/2018/08/01/logo_028_37_20180801163701.png'},
    {id: 1, name: 'Hankook Ilbo', img: 'https://mimgnews.pstatic.net/image/upload/office_logo/469/2017/10/19/logo_469_37_20171019115119.png'},
  ];
  allStores = [
    {id: 1, name: 'SZElectronic Store', img: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fA%3D%3D&w=1000&q=80', followerCount: '1.4k'},
    {id: 1, name: 'Winlocks', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeh8TXRfvpO61HG8vstszab2ckDF5qYDHFI83Y-_pjyteIwNVxbU-v1BTFcdrcMZh-KQA&usqp=CAU', followerCount: '2k'},
    {id: 1, name: 'Push Villa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkScnRX_21dOijxlAAQEF_LI2dA5kIqQsEhDbW-UjCdgWJkYr4wtaGLasA74Qcz64ALpQ&usqp=CAU', followerCount: '0k'},
    {id: 1, name: 'Montage store', img: 'https://previews.123rf.com/images/ziemanzgraph/ziemanzgraph1607/ziemanzgraph160700022/59645723-different-types-of-balls-for-various-kind-of-sports.jpg', followerCount: '100'},
    {id: 1, name: 'Pro soul', img: 'https://image.shutterstock.com/z/stock-vector-different-kind-of-musical-instruments-281431379.jpg', followerCount: '10k'},
    {id: 1, name: 'Daily dew', img: 'https://c8.alamy.com/comp/G12MEB/different-kind-of-meat-products-illustration-G12MEB.jpg', followerCount: '12k'},
    {id: 1, name: 'Mix touch', img: 'https://www.symmetrymagazine.org/sites/default/files/styles/2015_hero/public/images/standard/Header_SIDM.jpg?itok=5Py8nQk8', followerCount: '988'},
    {id: 1, name: 'Villow cricka store', img: 'https://imusic.b-cdn.net/images/item/original/247/0602527773247.jpg?bombay-bicycle-club-2012-a-different-kind-of-fix-lp&class=scaled', followerCount: '1.4k'},
    {id: 1, name: 'Bone nose store', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNPO3wrQL0uII_RmhAfz4G3PpH8L_rXy4ng&usqp=CAU', followerCount: '8.9k'},
    {id: 1, name: 'Miss Nex', img: 'https://i.ytimg.com/vi/awJN9HHuosI/maxresdefault.jpg'},
  ];

  private subject = new Subject<any>();
  private subjectMall = new Subject<any>();

  private tabsClickedSubject = new Subject<any>();

  public EMPTY = new Object();
  public qPressCheckTabClickedSubject = new BehaviorSubject<any>([]);
  public qMallCheckTabClickedSubject = new BehaviorSubject<any>([]);
  
  public pressTabsClickedSubject = new BehaviorSubject<any>([]);
  public scrollTopTop = new BehaviorSubject<any>([]);

  profileData: any;
  unreadMessageCount: any;

  // Weather Icons Array
  weatherIcons = [
    {
      id: 1,
      icon: '01d',
      svgIcon: 'assets/imgs/weather-animated/day.svg'
    },
    {
      id: 2,
      icon: '01n',
      svgIcon: 'assets/imgs/weather-animated/night.svg'
    },
    {
      id: 3,
      icon: '02d',
      svgIcon: 'assets/imgs/weather-animated/cloudy-day-3.svg'
    },
    {
      id: 4,
      icon: '02n',
      svgIcon: 'assets/imgs/weather-animated/cloudy-night-3.svg'
    },

    {
      id: 5,
      icon: '03d',
      svgIcon: 'assets/imgs/weather-animated/cloudy.svg'
    },
    {
      id: 2,
      icon: '03n',
      svgIcon: 'assets/imgs/weather-animated/cloudy.svg'
    },
    {
      id: 1,
      icon: '04d',
      svgIcon: 'assets/imgs/weather-animated/cloudy.svg'
    },
    {
      id: 2,
      icon: '04n',
      svgIcon: 'assets/imgs/weather-animated/cloudy.svg'
    },
    {
      id: 3,
      icon: '09d',
      svgIcon: 'assets/imgs/weather-animated/rainy-6.svg'
    },
    {
      id: 4,
      icon: '09n',
      svgIcon: 'assets/imgs/weather-animated/rainy-6.svg'
    },

  
    {
      id: 3,
      icon: '10d',
      svgIcon: 'assets/imgs/weather-animated/rainy-2.svg'
    },
    {
      id: 4,
      icon: '10n',
      svgIcon: 'assets/imgs/weather-animated/rainy-5.svg'
    },

    {
      id: 3,
      icon: '11d',
      svgIcon: 'assets/imgs/weather-animated/thunder.svg'
    },
    {
      id: 4,
      icon: '11n',
      svgIcon: 'assets/imgs/weather-animated/thunder.svg'
    },
    {
      id: 3,
      icon: '13d',
      svgIcon: 'assets/imgs/weather-animated/snowy-5.svg'
    },
    {
      id: 4,
      icon: '13n',
      svgIcon: 'assets/imgs/weather-animated/snowy-5.svg'
    },
    {
      id: 3,
      icon: '50d',
      svgIcon: 'assets/imgs/weather-animated/mist.svg'
    },
    {
      id: 4,
      icon: '50n',
      svgIcon: 'assets/imgs/weather-animated/mist.svg'
    },
  ]
  constructor() { }

  //saveProfileInfo (get data from api (app.component) and save it temporary here)
  saveProfileInfo(profileData){
    this.profileData = profileData;
  }
  getProfileInfo(){
    return this.profileData;
  }
  saveUnreadMessageCount(unreadMessageCount){
    this.unreadMessageCount = unreadMessageCount;
  }
  getUnreadMessageCount(){
    return this.unreadMessageCount;
  }
  //Set Observables
  //set store data for side menu
  setObservable(text){
    this.subject.next(text);
  }
  getObservable():Observable<any>{
    return this.subject.asObservable();
  }
  //QMALL PAGE
  setObservableMall(text){
    this.subjectMall.next(text);
  }
  getObservableMall():Observable<any>{
    return this.subjectMall.asObservable();
  }

  unSubscribeObservable(){
    return this.subject.unsubscribe();
  }
  unSubscribeObservableMallPage(){
    return this.subjectMall.unsubscribe();
  }

  checkTabClicked(value){
    this.tabsClickedSubject.next(value);
  }
  getcheckTabClickedObservable():Observable<any>{
    return this.tabsClickedSubject.asObservable();
  }
  //Like add
  likesArray: Array<any> = []
  saveLike(article_id, likeState){
    var likeObj = {
      article_id: article_id,
      likeState: likeState
    };
    this.likesArray.push(likeObj);
  }
  getLikes(){
    return this.likesArray;
  }
  //QPress section tabs changed
  qPressCheckTabClicked(value){
    this.qPressCheckTabClickedSubject.next(value);
    // this.qPressCheckTabClickedSubject.complete();
  }
  qPressCheckTabObservable():Observable<any>{
    return this.qPressCheckTabClickedSubject.asObservable();
  }
  //QMall section tabs changed
  qMallCheckTabClicked(value){
    this.qMallCheckTabClickedSubject.next(value);
  }
  qMallCheckTabObservable():Observable<any>{
    return this.qMallCheckTabClickedSubject.asObservable();
  }
  clearSubject(){
    this.qPressCheckTabClickedSubject = new BehaviorSubject<any>([]);
    this.qMallCheckTabClickedSubject = new BehaviorSubject<any>([]);
  }
  scrollToTopClicked(value){
    this.scrollTopTop.next(value);
  }
  scrollToTopObservable():Observable<any>{
    return this.scrollTopTop.asObservable();
  }
}
