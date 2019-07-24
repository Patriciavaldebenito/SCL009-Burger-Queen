import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformationOrderService {
  // la idea es que este servicio maneje la informacion 
  
  
  //a.- declaracion de variables 
  productSeletedInBreakfast:string         
  private enviarMensajeSubject =  new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  
  // b.- creacion de una function momentanea evaluacion 
  enviarMensaje(productSeletedInBreakfast:string){
    this.productSeletedInBreakfast = productSeletedInBreakfast;
    this.enviarMensajeSubject.next(productSeletedInBreakfast);
    console.log( "dentro del servicio , en enviarMensaje :" + productSeletedInBreakfast);
    return productSeletedInBreakfast;
    
  }
  
  // esa informacion es la seleccionada  por el mesero
  
  // 1ero cada elemento tickeado debe ser leido (ok)
  // 2do cada elemento tickeado debe ser tomado (ok)
  // 2do cada elemento tickeado debe ser guardado  
  // el elemento es guardado en un array de objetos 
  // ese array de objetos debe imprimirse en consola
  // luego debe imprimirse cn cierto formato en el container Order
  
}
