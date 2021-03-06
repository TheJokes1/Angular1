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
  waarde :number;
  savedValue:Number = null;
  title = 'Raad het getal';
  randomNumber= Math.floor(Math.random() * 100) + 1;
  numberOfGuesses:number = 10;
  guessed = false;
  secondsLocal: number;
  counterService : CounterService;
  
constructor(counterService: CounterService) {
  counterService.seconds.subscribe((seconds) => {
    this.secondsLocal = seconds;
  });
}
  onSave(){
    console.log(this.waarde);
    this.savedValue = this.waarde;
    this.numberOfGuesses--
  };

  isTooBig = () => {
    return this.savedValue > this.randomNumber;
  };

  geraden(){
    this.guessed=true;
  }

  nieuwSpel = () => {
    this.randomNumber= Math.floor(Math.random() * 100) +1;
    this.numberOfGuesses = 10;
    this.guessed = false;
    this.waarde = null;
    this.counterService.resetCounter();
    console.log(this.secondsLocal)
  }

  log(){
    console.log(this.guessed);
  }

  onKeyDown(event){
    if (event.key === "Enter"){
     this.onSave();
    }
  }
  
}