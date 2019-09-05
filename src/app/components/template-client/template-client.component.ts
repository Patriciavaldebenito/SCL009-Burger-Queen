import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaleTemplate } from 'src/app/orderOfEachClient';

@Component({
  selector: 'app-template-client',
  templateUrl: './template-client.component.html',
  styleUrls: ['./template-client.component.css']
})
export class TemplateClientComponent implements OnInit {
  saleTemplate : SaleTemplate;
  signupForm: FormGroup

  constructor( private  _buider : FormBuilder) { 

   this.signupForm = this._buider.group({
     nombre: ['ingresa nombre',Validators.required]
   })

   
  }

  

  ngOnInit() {
  }

  orderInTempleClient(){
    console.log(JSON.stringify(this.saleTemplate.date))
  }





}
