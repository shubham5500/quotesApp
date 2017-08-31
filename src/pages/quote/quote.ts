import { Component, OnInit} from '@angular/core';
import { ViewController } from 'ionic-angular';
import { QuotesServices } from '../../services/quotes.services';
import { Quote } from '../../data/quotes.interface';
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage implements OnInit{

  constructor(private quoteService: QuotesServices,private viewCtrl: ViewController) {
  }
  quote: Quote[];
  ngOnInit(){
    this.quote = this.quoteService.getFavoriteQuote();
  }
  closeModal(remove = false){
    this.viewCtrl.dismiss(remove); 
  }
}
