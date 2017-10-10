import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

import { persona } from "../clases/persona";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  ListaDePersonas:Array<any>;

  constructor(private datos:PersonaService)
  {
    this.ListaDePersonas = new Array<any>();
    this.listar();
        //Esto lo hice asi ahora para probar que los datos se muestran
  }
  

    listar()
    { 

      this.datos.select()
      .then(data=>{        
        //var obj:string = JSON.parse(data);   

        this.ListaDePersonas = JSON.parse(data);

        //console.log(this.ListaDePersonas);
      })
      .catch(error=> console.log(error))
    }


    
  ngOnInit() {
  }

}
