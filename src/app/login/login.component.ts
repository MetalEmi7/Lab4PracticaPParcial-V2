import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form={
  nombre:"",
  password:"",
  }
  constructor(private rout:Router, private datos:PersonaService) { }

  Loguearse()
  {
    this.datos.login(this.form)
    .then(data=>{
      console.log("Logueado");
      this.rout.navigate(["/menu"]);
    })
    .catch(error=>{
      console.log(error);
    })


    /*
    //hardcode 
    if (this.nombre == "admin" && this.password=="123456")
    {
        this.rout.navigate(["/menu"]);
    }
    */
  }

  ngOnInit() {
  }

}
