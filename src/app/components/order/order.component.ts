import { Component, OnInit, ɵConsole } from '@angular/core';
import { InformationOrderService } from 'src/app/services/information-order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // en html se ocupara una inyeccion dinamica MOMENTANEAMENTE de este valor con interpolacion {{ }}
  //a.- declaracion de variables 
  productSeletedInBreakfast:string = ''; // producto seleccionado en el desayuno
                                         // la misma variable fijada en el servicio inyectado
  //b.- inyeccion de dependencia - servicio 
  constructor(public informationOrderService:InformationOrderService) { }
  
  // subscribir al subject que expone el servicio inyectado
  ngOnInit() {
   this.informationOrderService.enviarMensajeObservable.subscribe(
        productSeletedInBreakfast => this.productSeletedInBreakfast = productSeletedInBreakfast);
  }
 



}
