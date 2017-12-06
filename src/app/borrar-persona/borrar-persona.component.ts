import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-borrar-persona',
  templateUrl: './borrar-persona.component.html',
  styleUrls: ['./borrar-persona.component.css']
})
export class BorrarPersonaComponent implements OnInit {
  @Input()
  idParaBorrar;

  @Output()
  stdEvent:EventEmitter<any>;


  constructor(private perService:PersonaService)
  {
    this.stdEvent = new EventEmitter<any>();
  }





  BorrarPersona(ID)
  {
    this.perService.deletePersona(ID)
    .then(data=>{

    console.log(data);
    this.stdEvent.emit();

    })
    
  }






  ngOnInit() {
  }

}
