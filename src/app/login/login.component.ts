import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;

  constructor(private rout:Router) { }

  Loguearse()
  {
    if (this.nombre == "admin" && this.password=="123456")
    {
        this.rout.navigate(["/menu"]);
        
    }
  }

  ngOnInit() {
  }

}
