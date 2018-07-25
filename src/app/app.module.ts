import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Pages
import { Pagina1Page } from '../pages/pagina1/pagina1'
import { Pagina2Page } from '../pages/pagina2/pagina2'
import { Pagina3Page } from '../pages/pagina3/pagina3'

@NgModule({
  declarations: [
    MyApp,
    
    //Pages
    Pagina1Page,
    Pagina2Page,
    Pagina3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: Pagina1Page, name: 'Pagina1', segment: 'pagina1'},
        {component: Pagina2Page, name: 'Pagina2', segment: 'pagina2'},
        {component: Pagina3Page, name: 'Pagina3', segment: 'pagina3/:text'}
      ]
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
