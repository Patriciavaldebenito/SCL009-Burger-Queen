import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class InformationOrderService {
  // la idea es que este servicio maneje la informacion 
  
  //a.- declaracion de variables 
  productSeletedInBreakfast:string  
  arr = [];   

  private enviarMensajeSubject =  new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  
  // b.- creacion de una function momentanea evaluacion 
  // observacion 
  observeProduct(productSeletedInBreakfast:string){

    this.productSeletedInBreakfast = productSeletedInBreakfast;
    this.enviarMensajeSubject.next(productSeletedInBreakfast);
    //console.log( "dentro del servicio , en enviarMensaje :" + productSeletedInBreakfast);
    
  }
  
  generarArray(productSelectedInBreakfast: string, arr){
     this.arr = arr;
     this.productSeletedInBreakfast = productSelectedInBreakfast;
     arr.push(productSelectedInBreakfast)
     console.log(arr);
  }

}
