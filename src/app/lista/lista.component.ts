import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  ListaDePersonas:Array<any>

  constructor(private datos:PersonaService) {
    this.ListaDePersonas = new Array<any>();
   }
  

    listar()
    {
      console.log("Metodo listar() - ");
      this.datos.select()
      .then(data=>{
        console.log(data);
        alert("Lista completa");
      })
      .catch(error=> console.log(error))
    }


    
  ngOnInit() {
  }

}
