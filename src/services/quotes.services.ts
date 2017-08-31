import { Quote } from '../data/quotes.interface';
export class QuotesServices{
    selectedQuote: Quote[] = [];
    addToFavoritePage(quote: Quote){
        this.selectedQuote.push(quote);
        console.log(this.selectedQuote);
    }
    removeFavorite(quote: Quote){
        const position = this.selectedQuote.findIndex((quoteEl : Quote)=>{
            return quote.id == quoteEl.id;
        });
        this.selectedQuote.splice(position , 1);
    }
    getFavoriteQuote(){
       return this.selectedQuote.slice();
    }
    isQuoteFavorite(quote: Quote){
       return this.selectedQuote.find((quoteEL: Quote)=>{
        return quoteEL.id == quote.id;
    });
    }
}