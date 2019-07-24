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
  productSeletedInBreakfast:string = ''; // producto seleccionado en el desayuno
                                         // la misma variable fijada en el servicio inyectado
  //b.- inyeccion de dependencia - servicio 
  constructor(public informationOrderService:InformationOrderService) { }
  
  // subscribir al subject que expone el servicio inyectado
  ngOnInit() {
   this.informationOrderService
       .enviarMensajeObservable
       .subscribe(
        productSeletedInBreakfast => this.productSeletedInBreakfast = productSeletedInBreakfast);
  }
  // si se hace click en algun boton del desayuno 1**
  /* 1. */
  /* HACER UNA FUNCION QUE ESCUCHE EL CLICK */
  getProduct(productSeletedInBreakfast:string){
    this.informationOrderService.enviarMensaje(productSeletedInBreakfast);
  }
  // menuBreakfast.nameSp => cafe2, jugo y sandwich  (ok)
  // 1ero se debe tomar ese valor cuando se haga click en el 
  // ese valor sera una variable = "breakfast seleccionado"  (ok)
  // y ademas ese valor capturado se debe pushear a un array 
  //vacio 
  // y cada elemento de ese array se debe mostrar en order
 
}
