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