import { Component, OnInit } from '@angular/core';
import { ClassMenu } from 'src/app/classMenu';
import { GeneralMenu } from 'src/app/generalMenu';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // DECLARACION de variables 
  button: string
  generalmenu = GeneralMenu;
  filterMenu = [];

  

  constructor() { }

  ngOnInit() {
  }

  isBreakfastOrLunch(generalmenu){
     
     if(generalmenu.type === 'breakfast')  {
      this.filterMenu.push(generalmenu) 
       
     } 
     else if (generalmenu.type === 'lunch')  {

     } 




  }

}
