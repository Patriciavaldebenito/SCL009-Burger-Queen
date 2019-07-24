import { Component, OnInit } from '@angular/core';
import { MenuLunch } from 'src/app/generalMenu';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  menuLunch = MenuLunch;
  constructor() { }

  ngOnInit() {
  }

}
