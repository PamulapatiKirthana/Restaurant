import { Component, OnInit } from '@angular/core';
declare const myFun:any;
@Component({
  selector: 'app-orderonline',
  templateUrl: './orderonline.component.html',
  styleUrls: ['./orderonline.component.css']
})
export class OrderonlineComponent implements OnInit {
  callfun(){
    myFun();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
