import { Component, OnInit, Input} from '@angular/core';
import { usuario } from "../clases/usuario";

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
@Input()
detalles:usuario;

  constructor()
  {this.detalles = new usuario();}



  ngOnInit() {
  }

}
