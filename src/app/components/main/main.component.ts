import { Component, OnInit } from '@angular/core';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuBreakfast } from 'src/app/generalMenu';
import { ClassMenu } from 'src/app/classMenu';
import { Menu } from 'src/app/classMenu';


//import { TemplateClientComponent } from '../template-client/template-client.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //a.1- declaracion de variables 
  arr = [];
  arrTwo=[];
  //new Object
  selectedProductInMenu = new ClassMenu();
  menuBreakfast = MenuBreakfast;
  objectSummary: any;
 ArraySummary;

  //b.- continuacion 
  constructor(public service: InformationOrderService, public modal: NgbModal) { }

  ngOnInit() {
    console.log(this.menuBreakfast)
    this.service.sendProductObservable.subscribe(response => {
      this.arr = response;
    })
  }

  onSelect(selectedProductInMenu: Menu) {
    let countCoffe =0;
    //  1.0
    this.selectedProductInMenu = selectedProductInMenu;
    //  2.0
    this.arr.push(selectedProductInMenu);
    //  3.0
    this.service.observeProduct(this.arr);

    // 4.0
    this.objectSummary = this.service.purchaseSummary;
    //console.log(this.objectSummary)
   
    // 5.0
    this.ArraySummary = this.service.detailUnitProduct;
    console.log(this.ArraySummary)
  




     
  }







}


/*


arraySummary.forEach( e => {

  let value="";
  let [a,b] = e; 

  if(e[0]==="coffee"){
    let value = 500;
    console.log(a)
    console.log(b)
    console.log("sii cafe")
  }
  else if (e[0]==="coffeeMilk"){
    let value = 700;
    console.log(" cafe con leche")
  }
  else if (e[0]==="sandwich"){
    let value = 700;
    console.log(" pancito")
  }
  else  {
    let value = 700;
    console.log(" jugo")
  }




})*/