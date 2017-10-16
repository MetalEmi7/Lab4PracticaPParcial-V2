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
    mail:"@X.com",
    sexo:"",
  }
  
  constructor(private datos:PersonaService ) { }

  alta()
  {
    console.log("Metodo alta() - ");
    this.datos.insert(this.form)
    .then(data=>{
      console.log(data);
    })
    .catch(error=> console.log(error))
  }

  
}
