import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home="./assets/homeimages.png";
  food1="./assets/food1.png";
  food2="./assets/food2.png";
  food3="./assets/food3.png";
  food4="./assets/food4.png";
  food5="./assets/food5.png";
  food6="./assets/food6.png";

  venpongal="./assets/kattepongal.png";
  vegmeal="./assets/vegmeal.png";
  chibir="./assets/chickenbiryani.png";
  fishcur="./assets/fishcurry.png";

  url1="./assets/logo.png";
}
