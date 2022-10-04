import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'phonenumber',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./mainmenu/mainmenu.module').then( m => m.MainmenuPageModule)
  },
  // {
  //   path: 'categorydetails',
  //   loadChildren: () => import('./categorydetails/categorydetails.module').then( m => m.CategorydetailsPageModule)
  // },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  // {
  //   path: 'news',
  //   loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  // },
  // {
  //   path: 'shopping',
  //   loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  // },
  // {
  //   path: 'videos',
  //   loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  // },
  // {
  //   path: 'applications',
  //   loadChildren: () => import('./applications/applications.module').then( m => m.ApplicationsPageModule)
  // },
  {
    path: 'newsfeed',
    loadChildren: () => import('./newsfeed/newsfeed.module').then( m => m.NewsfeedPageModule)
  },
  // {
  //   path: 'music',
  //   loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'scroll',
    loadChildren: () => import('./scroll/scroll.module').then( m => m.ScrollPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'region',
    loadChildren: () => import('./region/region.module').then( m => m.RegionPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then( m => m.CollectionsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'interest',
    loadChildren: () => import('./interest/interest.module').then( m => m.InterestPageModule)
  },
  // {
  //   path: 'images',
  //   loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
  // },
  {
    path: 'imagesdetail',
    loadChildren: () => import('./imagesdetail/imagesdetail.module').then( m => m.ImagesdetailPageModule)
  },
  {
    path: 'qpresscategory',
    loadChildren: () => import('./qpresscategory/qpresscategory.module').then( m => m.QpresscategoryPageModule)
  },
  {
    path: 'politicsnews',
    loadChildren: () => import('./politicsnews/politicsnews.module').then( m => m.PoliticsnewsPageModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'economy',
    loadChildren: () => import('./economy/economy.module').then( m => m.EconomyPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'life',
    loadChildren: () => import('./life/life.module').then( m => m.LifePageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'world',
    loadChildren: () => import('./world/world.module').then( m => m.WorldPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'view-news',
    loadChildren: () => import('./view-news/view-news.module').then( m => m.ViewNewsPageModule)
  },
  {
    path: 'opinion',
    loadChildren: () => import('./opinion/opinion.module').then( m => m.OpinionPageModule)
  },
  {
    path: 'bypress',
    loadChildren: () => import('./bypress/bypress.module').then( m => m.BypressPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'editimage',
    loadChildren: () => import('./editimage/editimage.module').then( m => m.EditimagePageModule)
  },
  {
    path: 'viewyourstory',
    loadChildren: () => import('./viewyourstory/viewyourstory.module').then( m => m.ViewyourstoryPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'qmallcatgeory',
    loadChildren: () => import('./qmallcatgeory/qmallcatgeory.module').then( m => m.QmallcatgeoryPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'gift',
    loadChildren: () => import('./gift/gift.module').then( m => m.GiftPageModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./fashion/fashion.module').then( m => m.FashionPageModule)
  },
  {
    path: 'beauty',
    loadChildren: () => import('./beauty/beauty.module').then( m => m.BeautyPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'bookstore',
    loadChildren: () => import('./bookstore/bookstore.module').then( m => m.BookstorePageModule)
  },
  {
    path: 'living',
    loadChildren: () => import('./living/living.module').then( m => m.LivingPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./grocery/grocery.module').then( m => m.GroceryPageModule)
  },
  {
    path: 'moreproducts',
    loadChildren: () => import('./moreproducts/moreproducts.module').then( m => m.MoreproductsPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'advertisement',
    loadChildren: () => import('./advertisement/advertisement.module').then( m => m.AdvertisementPageModule)
  },
  {
    path: 'newsdetails',
    loadChildren: () => import('./newsdetails/newsdetails.module').then( m => m.NewsdetailsPageModule)
  },
  {
    path: 'popularnews',
    loadChildren: () => import('./popularnews/popularnews.module').then( m => m.PopularnewsPageModule)
  },
  {
    path: 'popularsales',
    loadChildren: () => import('./popularsales/popularsales.module').then( m => m.PopularsalesPageModule)
  },
  {
    path: 'layout10',
    loadChildren: () => import('./layout10/layout10.module').then( m => m.Layout10PageModule)
  },
  {
    path: 'layout11',
    loadChildren: () => import('./layout11/layout11.module').then( m => m.Layout11PageModule)
  },
  {
    path: 'layout12',
    loadChildren: () => import('./layout12/layout12.module').then( m => m.Layout12PageModule)
  },
  {
    path: 'layout13',
    loadChildren: () => import('./layout13/layout13.module').then( m => m.Layout13PageModule)
  },
  {
    path: 'layout14',
    loadChildren: () => import('./layout14/layout14.module').then( m => m.Layout14PageModule)
  },
  {
    path: 'layout15',
    loadChildren: () => import('./layout15/layout15.module').then( m => m.Layout15PageModule)
  },
  {
    path: 'layout16',
    loadChildren: () => import('./layout16/layout16.module').then( m => m.Layout16PageModule)
  },
  {
    path: 'layout17',
    loadChildren: () => import('./layout17/layout17.module').then( m => m.Layout17PageModule)
  },
  {
    path: 'layout18',
    loadChildren: () => import('./layout18/layout18.module').then( m => m.Layout18PageModule)
  },
  {
    path: 'qpostcategory',
    loadChildren: () => import('./qpostcategory/qpostcategory.module').then( m => m.QpostcategoryPageModule)
  },
  {
    path: 'qpostlayout1',
    loadChildren: () => import('./qpostlayout1/qpostlayout1.module').then( m => m.Qpostlayout1PageModule)
  },
  {
    path: 'qpostlayout2',
    loadChildren: () => import('./qpostlayout2/qpostlayout2.module').then( m => m.Qpostlayout2PageModule)
  },
  {
    path: 'qpostlayout3',
    loadChildren: () => import('./qpostlayout3/qpostlayout3.module').then( m => m.Qpostlayout3PageModule)
  },
  {
    path: 'qpostlayout4',
    loadChildren: () => import('./qpostlayout4/qpostlayout4.module').then( m => m.Qpostlayout4PageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'moreoptions',
    loadChildren: () => import('./moreoptions/moreoptions.module').then( m => m.MoreoptionsPageModule)
  },
  {
    path: 'qpostlayout5',
    loadChildren: () => import('./qpostlayout5/qpostlayout5.module').then( m => m.Qpostlayout5PageModule)
  },
  {
    path: 'channel',
    loadChildren: () => import('./channel/channel.module').then( m => m.ChannelPageModule)
  },
  {
    path: 'allpress',
    loadChildren: () => import('./allpress/allpress.module').then( m => m.AllpressPageModule)
  },
  {
    path: 'qpostlayout6',
    loadChildren: () => import('./qpostlayout6/qpostlayout6.module').then( m => m.Qpostlayout6PageModule)
  },
  {
    path: 'qpostlayout7',
    loadChildren: () => import('./qpostlayout7/qpostlayout7.module').then( m => m.Qpostlayout7PageModule)
  },
  {
    path: 'qpostlayout8',
    loadChildren: () => import('./qpostlayout8/qpostlayout8.module').then( m => m.Qpostlayout8PageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'allstores',
    loadChildren: () => import('./allstores/allstores.module').then( m => m.AllstoresPageModule)
  },
  {
    path: 'phonenumber',
    loadChildren: () => import('./phonenumber/phonenumber.module').then( m => m.PhonenumberPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
