import { Component, OnInit,  } from '@angular/core';
import { MenuBreakfast } from 'src/app/generalMenu';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  menuBreakfast = MenuBreakfast;
  

  constructor() { }

  ngOnInit() {
  }




}
