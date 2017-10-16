import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

import { persona } from "../clases/persona";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {  
  PersonaParaMostrar:persona = new persona();

  ListaDePersonas:Array<any>;

  form={
    id:"",
    nombre:"",
    password:"",
    mail:"",
    sexo:"",
    foto:"",
  }

  constructor(private datos:PersonaService)
  {
    this.ListaDePersonas = new Array<any>();
    this.listar();
  }



    baja(persona)
    {
      //En slim se extrae la id de la persona para gestionar si baja
      this.datos.delete(persona)
      .then(data=>{        
        console.log(data);        
        this.listar();
      })
      .catch(error=> console.log(error))
    }




    alta()
    {
      this.datos.insert(this.form)
      .then(data=>{    
        console.log(data);
        this.listar();            
      })
      .catch(error=> console.log(error))
    }



    tomarFoto(archivo)
    {
      this.form.foto = archivo.target.files[0].name;

      this.datos.subirFoto(archivo.target.files[0])      
      .then(data=>{
        console.log(data);
        /*
        if (data != null) {
          console.log(archivo.target.files[0].name);        
        }
        */        
      })
      .catch(error=> console.log(error))      
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

        console.log(data);
        this.ListaDePersonas = data;        
      })
      .catch(error=> console.log(error))
    }


  ngOnInit() {
  }

}
