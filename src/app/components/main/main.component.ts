import { Component, OnInit } from '@angular/core';
//import { ClassMenu } from 'src/app/classMenu';
import { MenuBreakfast, MenuLunch } from 'src/app/generalMenu';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // DECLARACION de variables 
  menuBreakfast = MenuBreakfast;
  menuLunch = MenuLunch;
  //filterMenu = [];

  

  constructor() { }

  ngOnInit() {  
  }



}
