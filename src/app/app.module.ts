import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [ 
    HttpClientModule,
    FormsModule,  
    MbscModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    SuperTabsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule,
    BrowserAnimationsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ThemeableBrowser,
    SpeechRecognition,
    Camera,
    File,
    NativeStorage,
    BarcodeScanner,
    OneSignal,
    FingerprintAIO,
    SocialSharing,
    Screenshot,
    Clipboard,
    InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
