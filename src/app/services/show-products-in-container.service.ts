import { Injectable } from '@angular/core';
import { InformationOrderService } from './information-order.service';

@Injectable({
  providedIn: 'root'
})

 // este servicio estara conectado al componente order 
 // usara el array de objetos  arr
 // y se tomara el arr para mostrarlo en la order 
 // para ello se debe crear una tabla 
export class ShowProductsInContainerService {
  
  constructor(public informationOrderService : InformationOrderService ){

  }



}
