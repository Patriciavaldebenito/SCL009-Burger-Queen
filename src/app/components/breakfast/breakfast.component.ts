import { Component, OnInit, } from '@angular/core';
import { MenuBreakfast } from 'src/app/generalMenu';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { ClassMenu } from 'src/app/classMenu';



@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  //a.- declaracion de variables 
  menuBreakfast = MenuBreakfast;
  
  
  selectedClassMenu: ClassMenu;
  arr =[];
  // objeto desayuno 
  productSeletedInBreakfast: string = '';
  valueProductSeletedInBreakfast: number;

  //b.- inyeccion de dependencia - servicio 

  constructor(public informationOrderService: InformationOrderService) { }

  // subscribir al subject que expone el servicio inyectado
  ngOnInit() {

    this.informationOrderService
      .sendProductObservable
      .subscribe(
        productSeletedInBreakfast => this.productSeletedInBreakfast = productSeletedInBreakfast);

  

  }

  /* 1. */
  /* HACER UNA FUNCION QUE ESCUCHE EL CLICK */
  getProduct(productSeletedInBreakfast: string) {

   

    console.log("product : " + productSeletedInBreakfast)
  }

  onSelect(selectedClassMenu): void {
    this.arr.push(selectedClassMenu)
    console.log(selectedClassMenu)
    console.log(this.arr)
   

  }


}
