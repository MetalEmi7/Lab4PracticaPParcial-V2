import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

import { persona } from "../clases/persona";
import { HttpService } from '../servicios/http.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Output()  
  PersonaParaMostrar:persona = new persona();  //Para componente mostrarPersona
  
  

  @Input()
  ListaDePersonas:Array<any>;

  form={
    id:"",
    nombre:"",
    password:"",
    mail:"",
    sexo:"",
    foto:"",
  }

  constructor(private datos:PersonaService, private http:HttpService)
  {
    this.ListaDePersonas = new Array<any>();
    this.listar();
  }

    baja(persona)
    {
      this.datos.delete(persona)
      .then(data=>{

        this.listar();

      })
      .catch(error=> console.log(error))
    }


pete()
{}  


    alta()
    {
      this.http.realInsert(this.form)
      .then(data=>{

        this.listar(); 

      })
      .catch(error=> console.log(error))
    }





    tomarFoto(archivo)
    {
      this.form.foto = archivo.target.files[0].name;
    }




    onClickRow(persona)
    {
      this.datos.selectPersona(persona)
      .then(data=>{  
        console.log(data);
        this.PersonaParaMostrar = data;
      })
      .catch(error=> console.log(error))
    }



    listar()
    {
      this.datos.select()
      .then(data=>{

        this.ListaDePersonas = data;
        console.log (this.ListaDePersonas);   

      })
      .catch(error=> console.log(error))
    }









  ngOnInit() {
  }

}
