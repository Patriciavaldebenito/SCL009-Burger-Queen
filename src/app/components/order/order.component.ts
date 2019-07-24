import { Component, OnInit } from '@angular/core';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { ShowProductsInContainerService } from 'src/app/services/show-products-in-container.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // en html se ocupara ngFor por lo que por cada producto
  // en el objeto MenuBreakfast se creara un button
  // donde el atributo 

  //a.- declaracion de variables 

 // menuBreakfast= MenuBreakfast; // objeto desayuno 
  productSeletedInBreakfast:string = ''; // producto seleccionado en el desayuno
                                         // la misma variable fijada en el servicio inyectado
   arr =[];

  //b.- inyeccion de dependencia - servicio 

  constructor(public informationOrderService:InformationOrderService, 
              public showProductsInContainerService :ShowProductsInContainerService ) { }
  
  // subscribir al subject que expone el servicio inyectado
  ngOnInit() {
   this.initInformationOrderService();
  }



  initInformationOrderService(){
    this.informationOrderService
    .enviarMensajeObservable
    .subscribe(
     productSeletedInBreakfast => {
        return this.productSeletedInBreakfast = productSeletedInBreakfast;
      });
  }

  
  //                                             FUNCIONES - (CLICK) EN HTML DEL COMPONENTE

  /* 1. */
  /* HACER UNA FUNCION QUE ESCUCHE EL CLICK */
  getProduct(productSeletedInBreakfast:string){
    this.informationOrderService.enviarMensaje(productSeletedInBreakfast);
  }

 



  // menuBreakfast.nameSp => cafe2, jugo y sandwich 

  // 1ero se debe tomar ese valor cuando se haga click en el 
  // ese valor sera una variable = "breakfast seleccionado"

  // y ademas ese valor capturado se debe pushear a un array 
  //vacio 

  // y cada elemento de ese array se debe mostrar en order





}
