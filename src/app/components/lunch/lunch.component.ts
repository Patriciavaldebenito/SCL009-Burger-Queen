import { Component, OnInit } from '@angular/core';
import { MenuLunch } from 'src/app/generalMenu';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { ClassMenu } from 'src/app/classMenu';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  //a.- declaracion de variables 
  menuLunch = MenuLunch;
  selectedClassMenu: ClassMenu[];
  arr : Array<any> = [];

  //b.- inyeccion de dependencia - servicio 
  constructor(public informationOrderService: InformationOrderService) {
    this.informationOrderService = informationOrderService;
  }

  //c.- subscribir al subject que expone el servicio inyectado
  ngOnInit() {
    this.informationOrderService.sendProductObservable.subscribe(arr => this.arr = arr);
  }

  /* ***   Evento   Click   ***/
  onSelect(selectedClassMenu): void {
    this.arr.push(selectedClassMenu)
    this.informationOrderService.observeProduct(this.arr)

  }

}

