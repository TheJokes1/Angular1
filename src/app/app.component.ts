import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl } from '@angular/forms';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  waarde = 0;
  savedValue:Number = null;
  title = 'Raad het getal';
  randomNumber= Math.floor(Math.random() * 100) + 1;
  counter:number = 10;
  guessed= false;
  secondsLocal: number = 60;
  
constructor(counterservice: CounterService) {
  counterservice.seconds.subscribe((seconds) => {
    this.secondsLocal = seconds;
  });
}

  onSave(){
    console.log(this.waarde);
    this.savedValue = this.waarde;
    this.counter--
  };

  isTooBig = () => {
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
