import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { TabsPage } from '../tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesServices} from '../services/quotes.services';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesServices
  ]
})
export class AppModule {}
