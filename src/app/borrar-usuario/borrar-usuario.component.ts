import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html',
  styleUrls: ['./borrar-usuario.component.css']
})
export class BorrarUsuarioComponent implements OnInit {
  @Input()
  idParaBorrar;

  @Output()
  stdEvent:EventEmitter<any>;


  constructor(private perService:UsuarioService)
  {
    this.stdEvent = new EventEmitter<any>();
  }





  BorrarUsuario(ID)
  {
    this.perService.deleteUsuario(ID)
    .then(data=>{

    console.log(data);
    this.stdEvent.emit();

    })
    
  }






  ngOnInit() {
  }

}
