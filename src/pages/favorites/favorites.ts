import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Toggle } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesServices } from '../../services/quotes.services';
import { ToggleService } from '../../services/toggle.services';
import { QuotePage } from '../quote/quote';
@Component({  
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

constructor(public navCtrl: NavController, public navParams: NavParams,private quoteService : QuotesServices, public modalCtrl: ModalController, public toggleService: ToggleService) {
}
  quote: Quote[];
  abc: boolean;
  ionViewWillEnter(){
    this.quote = this.quoteService.getFavoriteQuote();
    this.altBackground();
  } 
  onClickPage(quo: Quote){
    const modal = this.modalCtrl.create(QuotePage, quo);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.removeFromFavorite(quo);
      }
    }); 
  }
  removeFromFavorite(quote: Quote){
    this.quoteService.removeFavorite(quote);
    this.quote = this.quoteService.getFavoriteQuote();
  }
  altBackground(){
   return this.abc =  this.toggleService.getToggleValue();
  }
}
