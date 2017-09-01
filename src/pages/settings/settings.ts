import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { ToggleService } from '../../services/toggle.services';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(public toggleService: ToggleService) {
  }
  onToggle(e: Toggle){  
    this.toggleService.ToggleValue(e);
  }
  getToggle(){
    return this.toggleService.getToggleValue();
  }
}
