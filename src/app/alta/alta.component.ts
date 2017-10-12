import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent{

  form={
    nombre:"",
    password:"",
    mail:"",
    sexo:"",
    foto:""
  }
  
  constructor(private datos:PersonaService ) { }
  CboxEditar:boolean=false;

  alta()
  {
    console.log("Metodo alta() - ");
    this.datos.insert(this.form)
    .then(data=>{      
      
      //console.log(data);
      console.log(data);
      
    })
    .catch(error=> console.log(error))
  }




  tomarFoto(archivo)
  {
    this.form.foto = archivo.target.files[0].name;

    this.datos.subirFoto(archivo)
    .then(data=>{      

        console.log(data);

      if (data == null) {
        console.log(archivo.target.files[0].name);        
      }
      
      
    })
    .catch(error=> console.log(error))

    
  }
}
