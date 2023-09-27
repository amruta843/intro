import { Component } from '@angular/core';
import { Istudent } from './models/student';
import { Iperson } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intro';
  showbox:boolean=false;

  skills : string[] = ["html","java script", "css", "Bootsrap", "Angular",]
  
  student:Array<Istudent>=[
    {
    fname:"Amruta",
    lname:"Samale",
    roll_no:21
  },
  {
    fname:"Ashwini",
    lname:"Ambhure",
    roll_no:22
  },
  {
    fname:"Priyanka",
    lname:"Jadhav",
    roll_no:33
  },
  {
    fname:"Shreya",
    lname:"Patil",
    roll_no:46
  }
]
person :Array<Iperson>=[
  {
    fname:"Sachin",
    lname:"Tendulkar",
    proff:"Cricketer",
    country:"India"

  },
  {
    fname:"Lata",
    lname:"Mangeshkar",
    proff:"Singer",
    country:"India"

  },
  {
    fname:"Ritesh",
    lname:"Deshmukh",
    proff:"Actor",
    country:"India"

  },
  {
    fname:"Genilia",
    lname:"Deshmukh",
    proff:"Actress",
    country:"India"

  }
]

constructor(){

}
onToggle(){
  console.log("Btn Clicked")
  this.showbox=!this.showbox
}
}
