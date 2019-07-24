import { Component, OnInit,  } from '@angular/core';
import { MenuBreakfast } from 'src/app/generalMenu';
import { InformationOrderService } from 'src/app/services/information-order.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  // en html se ocupara ngFor por lo que por cada producto
  // en el objeto MenuBreakfast se creara un button
  // donde el atributo value es =    {{menuBreakfast.nameSp}}
  //a.- declaracion de variables 
  menuBreakfast= MenuBreakfast; // objeto desayuno 
  arr = [];
  productSeletedInBreakfast:string = ''; // producto seleccionado en el desayuno, la misma variable fijada en el servicio inyectado
  //b.- inyeccion de dependencia - servicio 
 
  constructor(public informationOrderService:InformationOrderService) { }
  
  // subscribir al subject que expone el servicio inyectado
  ngOnInit() {
   this.informationOrderService
       .enviarMensajeObservable
       .subscribe(
        productSeletedInBreakfast => this.productSeletedInBreakfast = productSeletedInBreakfast);
  }
 
  /* 1. */
  /* HACER UNA FUNCION QUE ESCUCHE EL CLICK */
  getProduct(productSeletedInBreakfast:string,arr){
    this.informationOrderService.observeProduct(productSeletedInBreakfast);
    this.informationOrderService.generarArray(productSeletedInBreakfast,arr);

  }

getvalue(menuBreakfast){
  this
}
 
 
}
