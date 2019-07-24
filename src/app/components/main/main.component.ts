import { Component, OnInit } from '@angular/core';
//import { ClassMenu } from 'src/app/classMenu';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // DECLARACION de variables 
  button: string
  
 
  
  constructor() { }

  ngOnInit() {
  }


// funcion --> valueButtonBreakfastOrLunch(button:string)
// toma el valor del boton 
// *** se pretende que esta variable luego pueda servir 


 valueButtonBreakfastOrLunch(button:string){
   this.button = button;
    console.log("el boton es:"  + button)

  }































  //isBreakfastOrLunch(generalmenu){
    // if(generalmenu.type === 'breakfast'){
      //this.filterMenu.push(generalmenu.name)
     //} 
     //else if (generalmenu.type === 'lunch')  {
     //} 
  //}
}
