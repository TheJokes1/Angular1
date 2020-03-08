import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raad het getal';
  randomNumber= Math.floor(Math.random() * 100) + 1 ;
  
  onEnter(){
    alert("entered")
  }
}

export class NgIfComponent { 
  waarde:number;
  }