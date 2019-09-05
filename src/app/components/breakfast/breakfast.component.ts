import { Component, OnInit } from '@angular/core';
import { MenuBreakfast } from 'src/app/generalMenu';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { ClassMenu } from 'src/app/classMenu';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  //a.- declaracion de variables 
   menuBreakfast = MenuBreakfast;
   selectedClassMenu: ClassMenu[]; 

   arr = [];

  //b.- inyeccion de dependencia - servicio 
  constructor(public informationOrderService: InformationOrderService) { 
    this.informationOrderService = informationOrderService;
  }
 

  //c.- subscribir al subject que expone el servicio inyectado
  ngOnInit() { this.informationOrderService.sendProductObservable.subscribe( arr=> this.arr = arr);  }
  
  /* ***   Evento   Click   ***/
  onSelect(selectedClassMenu): void {
    console.log("arr :" + this.arr)
    console.log(this.arr)
    this.arr.push(selectedClassMenu)
    this.informationOrderService.observeProduct(this.arr)
  }

}