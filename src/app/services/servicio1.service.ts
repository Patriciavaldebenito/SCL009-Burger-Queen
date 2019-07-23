import { Injectable } from '@angular/core';
import { Servicio2Service } from './servicio2.service';


@Injectable({
  providedIn: 'root'
})

export class Servicio1Service {

  constructor(private servicio2Service : Servicio2Service) { }
}
