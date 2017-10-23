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
  mail:"",
  password:"",
  
  }
  constructor(private rout:Router, private datos:PersonaService) { }

  Loguearse()
  {
    this.datos.login(this.form)
    .then(data=>{
      
        if (data.jwt != null) {
          console.log("Estoy en Login "+ data);
        
          this.rout.navigate(["/menu"]);
          console.log(data);
        
        }
        else
        {
          console.log(data);
        }        
        
    })
    .catch(error=>{
      console.log(error);
    })
    
  }

  ngOnInit() {
  }

}
