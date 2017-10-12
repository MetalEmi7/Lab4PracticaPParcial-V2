import { Component, OnInit, Input} from '@angular/core';
import { persona } from "../clases/persona";

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {
@Input()
detalles:persona;

  constructor()
  {
    this.detalles = new persona();
  }





  ngOnInit() {
  }

}
