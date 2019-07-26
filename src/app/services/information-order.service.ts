// Information-Order-Service --> manejara la información
// ¿Qué información?  los productos seleccionados en pantalla por el mesero

//  procedimiento: 
// 1ero -- El producto seleccionado es : productSeletedInBreakfast:string 
// 2do  -- El producto es almacenado en el array UnitSaleProductSet : UnitProduct[] = [];
//         El array  UnitSaleProductSet es importado y ubicado en   src/app
// 3ero -- El producto debe ser almacenado en un objeto cuyas propiedades son name y value 
//         [{name:string,value:number},{name:string,value:number}....., {n,n}]

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class InformationOrderService {

  // a- declaracion de variables 

 
  order = [];
  containerProduct;
  orderObserver;


 
  //----------------------------------------------------------------- uso de observador 

  private sendProductSubject = new Subject<any>();
  sendProductObservable = this.sendProductSubject.asObservable();

 //----------------------------------------------------------------- uso de observador 
 //----------------------------------------------------------------- uso de function para subcripcion 


  // b.- creacion de una function momentanea evaluacion 
  // observacion 
  observeProduct(order) {
    this.order = order;
    this.sendProductSubject.next(order);
  console.log("dentro del servicio , en enviarMensaje :" + JSON.stringify(order)); 
  this.orderObserver = order; 
  }



 //----------------------------------------------------------------- uso de observador 






}