import { Component, OnInit } from '@angular/core';
import { MenuLunch } from 'src/app/generalMenu';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { ClassMenu } from 'src/app/classMenu';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  //a.- declaracion de variables 
  menuLunch= MenuLunch;
  selectedClassMenu: ClassMenu[]; 

  arr = [];

//  ************************************************************************
 //b.- inyeccion de dependencia - servicio 
 constructor(public informationOrderService: InformationOrderService) { 
   this.informationOrderService = informationOrderService;
 }

//  ************************************************************************
 //c.- subscribir al subject que expone el servicio inyectado
 ngOnInit() { this.informationOrderService.sendProductObservable.subscribe( arr=> this.arr = arr);
                                                                           }
 //                                                                        arr = order en el servicio

 /* ***   Evento   Click   ***/





 onSelect(selectedClassMenu): void {
   
   // inicio/seguimiento   -     el array es vacio 
   console.log(" brakfast  -- arr antes de ser llenado :" + this.arr)
   console.log(this.arr)
   // pero ahora se guardara el elemento / producto clickeado
   this.arr.push(selectedClassMenu)
   // listo el producto esta en el array 
   console.log(" objeto por producto :" + JSON.stringify(selectedClassMenu))
   console.log(" brakfast  -push- dps de ser llenado :" + JSON.stringify(this.arr))
   
   // ahora arr sera parametro de la funcion setOrder del InformationOrderServer importado en el constructor 
   // e iniciado (ver ngOnInit ) del componente
   //this.informationOrderService.setOrder(this.arr)
   this.informationOrderService.observeProduct(this.arr)

 }



}
