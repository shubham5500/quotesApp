import {Component} from '@angular/core';
import {FavoritesPage} from '../pages/favorites/favorites';
import {LibraryPage} from '../pages/library/library'; 
@Component({
    selector: 'page-tabs',
    templateUrl:'tabs.html'
})
export class TabsPage{
    libpage = LibraryPage;
    favPage = FavoritesPage;
}