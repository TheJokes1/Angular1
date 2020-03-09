import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  savedValue:Number = null;
  title = 'Raad het getal';
  randomNumber= Math.floor(Math.random() * 100) + 1;
  counter:number = 10;
  guessed= false;
  
  onSave(waarde){
    console.log(waarde);
    this.savedValue = waarde;
    this.counter--
  };

  isTooBig(){
    return this.savedValue > this.randomNumber;
  }

  startOver(){
    this.randomNumber= Math.floor(Math.random() * 100) +1;
    this.counter=10;
    this.guessed=false;
  }

  geraden(){
    this.guessed=true;
  }

};
