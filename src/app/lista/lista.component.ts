import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UsuarioService } from "../servicios/usuario.service";

import { usuario } from "../clases/usuario";
import { HttpService } from '../servicios/http.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Output()  
  UsuarioParaMostrar:usuario = new usuario();  //Para componente mostrarUsuario
  
  

  @Input()
  ListaDeUsuarios:Array<any>;

  form={
    id:"",
    nomUsuario:"",
    password:"",
    email:"",
    sexo:"",
    foto:"Default.jpg",
  }

  constructor(private datos:UsuarioService, private http:HttpService)
  {
    this.ListaDeUsuarios = new Array<any>();
    this.listar();
  }

    baja(usuario)
    {
      this.datos.delete(usuario)
      .then(data=>{

        this.listar();

      })
      .catch(error=> console.log(error))
    }


  


    alta()
    {
      this.http.realInsert(this.form)
      .then(data=>{

        this.listar(); 

      })
      .catch(error=> console.log(error))
    }





    tomarFoto(archivo)
    {
      this.form.foto = archivo.target.files[0].name;
    }




    onClickRow(usuario)
    {
      this.datos.selectUsuario(usuario)
      .then(data=>{  
        console.log(data);
        this.UsuarioParaMostrar = data;
      })
      .catch(error=> console.log(error))
    }



    listar()
    {
      this.datos.select()
      .then(data=>{

        this.ListaDeUsuarios = data;
        console.log (this.ListaDeUsuarios);   

      })
      .catch(error=> console.log(error))
    }









  ngOnInit() {
  }

}
