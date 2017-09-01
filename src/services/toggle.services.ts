import { Toggle } from 'ionic-angular';
export class ToggleService{
    switch: Toggle;
    onOff: boolean;
    ToggleValue(toggle: Toggle){
        this.onOff = toggle._value;
    }
    getToggleValue(){
        return this.onOff;
    }
}