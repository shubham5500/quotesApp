import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import {FavoritesPage} from '../favorites/favorites';
import quotes from '../../data/quotes';
import {QuotesServices} from '../../services/quotes.services';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

  constructor(private navCtrl:NavController, public navParams: NavParams,public alertCtrl: AlertController, private quoteService: QuotesServices) {

  }
  quotesText: {category:string,quotes: Quote[],icon:string};
  ngOnInit(){
    this.quotesText = this.navParams.data;
  }
  addToFavorite(selectedQuote: Quote){
   // this.navCtrl.push(FavoritesPage, {});
   const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: "Are you sure want to add?",
    buttons: [{
      text: 'Yes, go ahead',
      handler: ()=>{
        this.quoteService.addToFavoritePage(selectedQuote);
      }
    },
    {
      text: 'No, i changed my mind',
      role:'cancel',
      handler: ()=>{
        
      }
    }
  ]
   });
   alert.present();
  }
  removeToFavorite(quotes: Quote){
     this.quoteService.removeFavorite(quotes);
  }
  isFavorite(quote: Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
