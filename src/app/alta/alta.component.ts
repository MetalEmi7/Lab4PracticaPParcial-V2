import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  nombre:string;
  password:string;
  mail:string;
  sexo:string;

  constructor(private http:Http) { }

  alta()
  {

  }

  ngOnInit() {
  }

}
