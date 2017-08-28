import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quotes.interface';
import quotes from '../../data/quotes'; 
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  quotesCollection: {category: string, quotes: Quote[], icon: string}[];
  ngOnInit(){
    this.quotesCollection = quotes;
  }
}
