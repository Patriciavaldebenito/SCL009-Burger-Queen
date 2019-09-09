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
  arr=[];
  //new Object
  selectedProductInMenu = new ClassMenu();
  menuBreakfast = MenuBreakfast;


  //b.- continuacion 
  constructor(public service: InformationOrderService, public modal: NgbModal) { }

  ngOnInit() {

    this.service.sendProductObservable.subscribe(response => {
      this.arr = response;
    })

  }

  onSelect(selectedProductInMenu: Menu){
    //  1.0
    this.selectedProductInMenu = selectedProductInMenu;
         console.log(selectedProductInMenu); console.log(typeof selectedProductInMenu)

    //  2.0
    this.arr.push(selectedProductInMenu);
         console.log(this.arr)

    //  3.0
    this.service.observeProduct(this.arr)
  }

  

}



