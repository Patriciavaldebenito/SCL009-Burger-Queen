import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { element } from 'protractor';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { getDefaultService } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class InformationOrderService {
  // a- declaracion de variables 
  detailUnitProduct = new Array();
  producto: string;
  //orderObserver;
  purchaseSummary:any;
  private sendProductSubject = new Subject<[]>();
  sendProductObservable = this.sendProductSubject.asObservable();

  // b.- creacion de una function momentanea evaluacion 
  observeProduct = (detailBreakfast) => {
    // 1.0
    this.sendProductSubject.next(detailBreakfast); //console.log(detailBreakfast)
    // 2.0
    let lastProductAdded = detailBreakfast.pop();   //console.log(a);
    let name = lastProductAdded.name;                  //console.log(b);   
    let c = lastProductAdded.value;                 //console.log(c);

    // 3.0 
    this.detailUnitProduct.push({producto:name, valor:c}); // console.log(this.detailUnitProduct);

    this.purchaseSummary = this.detailUnitProduct.reduce((contadorProduct, name) => {
      contadorProduct[name] = (contadorProduct[name] || 0 )+1;
      return contadorProduct;
    },{});

     
    // e x a m p l e :  
    //this.purchaseSummary = { coffee:1, coffeeMilk:3 , juice:4 }


  }


  







}

/*

let convirtiendoObjetoEnArray=Object.entries(cant);
console.log(convirtiendoObjetoEnArray);


// 4.0   se imprime los nombres de productos comprados
let nombresProductosComprados = Object.keys(cant);
console.log(nombresProductosComprados)

nombresProductosComprados.forEach(element => {
  console.log(element)
})

// 5.0  se cuentan los productos que lleva el cliente 
let cantidadProductosComprados = Object.values(cant);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let suma = cantidadProductosComprados.reduce(reducer)
console.log(suma);  
*/