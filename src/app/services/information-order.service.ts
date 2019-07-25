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
import { UnitProduct } from '../orderOfEachClient';
import { ClassMenu } from '../classMenu';




@Injectable({
  providedIn: 'root'
})

export class InformationOrderService {
  // a- declaracion de variables 
  UnitSaleProductSet : UnitProduct[] = [];

  selectedClassMenu:ClassMenu;

  //arr = [];   

  // uso de observador 
  private sendProductSubject =  new Subject<any>();
  sendProductObservable = this.sendProductSubject.asObservable();
  
  
  // b.- creacion de una function momentanea evaluacion 
  // observacion 
  observeProduct(selectedClassMenu){

    this.selectedClassMenu = selectedClassMenu;

    this.sendProductSubject.next(selectedClassMenu);

    console.log( "dentro del servicio , en enviarMensaje :" + selectedClassMenu);
  
  }
  
  

}
