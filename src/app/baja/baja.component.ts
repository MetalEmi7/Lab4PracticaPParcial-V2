import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {
  mostrar_btn_submit:boolean=false;

  form={
    id:"",
    nombre:"",
    password:"",
    mail:"",
    sexo:"",
    foto:"Default.jpg",
  }

  constructor(private datos:PersonaService)
  { }



  baja()
  {
    console.log("Metodo baja() - ");
    this.datos.delete(this.form)
    .then(data=>{
      
      this.mostrar_btn_submit = false;
      console.log(data);
      
    })
    .catch(error=> console.log(error))
  }



  buscar()
  {
    console.log("Metodo buscar() - ");
    this.datos.selectPersona(this.form)
    .then(data=>{

      console.log(this.form);
      console.log(data);

      if(data["status"] == 404)
      {
        alert("No se ha encontrado");
      } 
      else
      {
        this.mostrar_btn_submit = true;
        this.form = data;      
        console.log(data);
      }
      
    })
    .catch(error=> console.log(error))
  }  



  ngOnInit() {}

}
