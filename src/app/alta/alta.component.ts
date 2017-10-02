import { Component, OnInit } from '@angular/core';
import { HttpService } from "../servicios/http.service"; //Hasta aca

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent{

  nombre:string;
  password:string;
  mail:string;
  sexo:string;

  
  constructor(private datos:HttpService ) { } //Hasta aca, funciona bien la pagina

  alta()
  {
    console.log("Metodo alta() - ");

  }

  
}
