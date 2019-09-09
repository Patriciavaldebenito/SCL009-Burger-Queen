import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationOrderService {
  // a- declaracion de variables 
  detailUnitProduct = new Array();
  producto : string; 
  //orderObserver;
  private sendProductSubject = new Subject<[]>();
  sendProductObservable = this.sendProductSubject.asObservable();

  // b.- creacion de una function momentanea evaluacion 
  observeProduct = (detailBreakfast) => {

    this.sendProductSubject.next(detailBreakfast);
    console.log(detailBreakfast);
    console.log(detailBreakfast.length);// cantidad de productos 


     detailBreakfast.forEach(element => {
       this.detailUnitProduct.push(element.name)
       console.log(this.detailUnitProduct)
     });
  }




}