import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationOrderService {
  // a- declaracion de variables 
  order = [];
  orderObserver;


  private sendProductSubject = new Subject<any>();
  sendProductObservable = this.sendProductSubject.asObservable();

  // b.- creacion de una function momentanea evaluacion 
  // observacion 
  observeProduct(order) {
    this.order = order;
    this.sendProductSubject.next(order);
    console.log("dentro del servicio , en enviarMensaje :" + JSON.stringify(order));
    this.orderObserver = order;
  }

}