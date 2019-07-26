import { Component, OnInit } from '@angular/core';
import { InformationOrderService } from 'src/app/services/information-order.service';
import { MenuBreakfast } from 'src/app/generalMenu';
import { ClassMenu } from 'src/app/classMenu';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateClientComponent } from '../template-client/template-client.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  //a.- declaracion de variables 


  arr=[];
  elementValue=0;
  elementValueAc=0;

 

//  ************************************************************************
 //b.- inyeccion de dependencia - servicio 
 constructor(public informationOrderService: InformationOrderService, private modalService : NgbModal) { 
   this.informationOrderService = informationOrderService;
 }

//  ************************************************************************
 //c.- subscribir al subject que expone el servicio inyectado
 ngOnInit() { 
   
  this.informationOrderService.sendProductObservable.subscribe(
     arr => { 
                    this.arr = arr; 
                    console.log("en order arr :" + JSON.stringify(arr));
                    console.log("valueelement :"+ this.elementValue)
                    
                    arr.forEach(element => {
                             this.elementValue = element.value;
                             return this.elementValue;
                      
                        
                    });

                    console.log(("valueelement2 :"+ this.elementValue));
                    this.elementValueAc = this.elementValueAc +  this.elementValue;
                    console.log(("value element  ACumulado :"+ this.elementValueAc))
                    return this.elementValueAc;

    }
  )}

  clickSendToKitchen(){

    console.log("btn enviando a cocina funcionando, se abre modal para solicitar nombre del cliente ")
     const modal = this.modalService.open(TemplateClientComponent)
     modal.result.then(
       this.handleModalTemplateClientComponent.bind(this),
       this.handleModalTemplateClientComponent.bind(this)
     )
    
  }




  handleModalTemplateClientComponent(){
    console.log("si leyebdo handleModalTemplateClientComponent");
  }
}



