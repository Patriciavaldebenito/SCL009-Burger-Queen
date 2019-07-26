import { Component, OnInit } from '@angular/core';
import { InformationOrderService } from 'src/app/services/information-order.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  arr=[];

  constructor(public informationOrderService : InformationOrderService) {
    this.informationOrderService = informationOrderService;
   }


  ngOnInit() { 
   
    this.informationOrderService.sendProductObservable.subscribe(
       arr => { 
                      this.arr = arr; 
                      console.log("en order arr :" + JSON.stringify(arr));
                    
      }
    )}

}
