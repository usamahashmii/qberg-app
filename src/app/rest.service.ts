import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = 'https://qberg.mn/api/';
  oneSignalAppID = "75be6697-8829-487e-ad3b-8feb3a437afb";
  headerInfo: any = {
    "Accept": 'application/json',
    'Authorization': 'Bearer ' ,
  };
  constructor(private httpsClient: HttpClient) {
  }
  //Get Weather Info
  getWeatherDetails(){
    return this.httpsClient.get('https://api.openweathermap.org/data/2.5/weather?lat=' + 30.189667 + '&lon=' + 71.515463 + '&appid=' + '05387b56651db6f0023bced2b9ecd4e9' + '&units=metric');
  }
  //Create account
  createAccount(formData){
    return this.httpsClient.post(this.baseUrl + 'register',formData,this.headerInfo);
  }
  //Login
  login(formData){
    return this.httpsClient.post(this.baseUrl + 'login',formData,this.headerInfo);
  }
  //Logout
  logout(formData , token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,     
    };

    return this.httpsClient.post(this.baseUrl + 'logout',formData, {headers});
  }
  //Send OTP
  sendOtpForLogin(formData){
    return this.httpsClient.post(this.baseUrl + 'sendOtpForLogin', formData ,this.headerInfo);
  }
  //Login with OTP
  loginWithOTP(formData){
    return this.httpsClient.post(this.baseUrl + 'phoneLogin', formData ,this.headerInfo);
  }
  //Tabe Page
  newsFeed(token, pageNumber){//News Feed
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,     
    };
    return this.httpsClient.get(this.baseUrl + 'newsFeed?page=' + pageNumber, {headers});
  }
  popularNews(token, pageNumber){//Popular News
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,     
    };
    return this.httpsClient.get(this.baseUrl + 'popularNews?page=' + pageNumber, {headers});
  }
  //get Single News Details
  singleNewsDetails(formData, token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,     
    };
    return this.httpsClient.post(this.baseUrl + 'article', formData, {headers});
  }
  //News Like
  likeNews(formData, token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.post(this.baseUrl + 'incrementPostCounter',formData ,{headers});
  }
  //QPress Section
  newsCategories(formData, token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + 'newMenuitems' ,{headers});
  }
  //Getting QPess data w.r.t categories 
  getCategoryNews(token, id, pageNumber){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + 'newMenuitems/' + id + 'newsFeed?page=' + pageNumber,{headers});
  }
  //QMall Section
  mallCategories(formData, token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + '' ,{headers});
  }
  //Getting QPess data w.r.t categories 
  getCategoryMall(token, id, pageNumber){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + '/' + id + 'newsFeed?page=' + pageNumber,{headers});
  }
  //Get profile data
  getProfileInfo(token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + '',{headers});
  }
  //Notifications
  getProfile(token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get('https://qberg.mn/api/user',{headers});
  }
  updateProfile(formData, token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.post(this.baseUrl + 'UpdateUser', formData,{headers});
  }
  //Notifications
  notifications(token, pageNumber){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + 'GetNotification' + '?page=' + pageNumber,{headers});
  }
  //Match Previous Password
  matchOldPassword(token, formData){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.post(this.baseUrl + 'PasswordMatch', formData,{headers});
  }
  //Change Password
  changePassword(token, formData){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.post(this.baseUrl + 'Change_password', formData,{headers});
  }
  //get Chat
  getChat(token, pageNumber){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + 'GetMessage' + '?page=' + pageNumber,{headers});
  }
  //send message
  sendMessage(token, formData){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.post(this.baseUrl + 'sendMessage', formData,{headers});
  }
}

