import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from "../servicios/http.service";

@Injectable()
export class PersonaService {

  //Para encapsulamiento
  //miHttp:HttpService;

  constructor(public miHttp:HttpService)
  {
    
  }



  public select()  {
        
    return this.miHttp.realSelect()
    .then(data=>data)
    .catch(error=>error)
  }


  public selectPersona(persona)  {    

    return this.miHttp.realSelectPersona(persona)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public insert(datos)  {

    return this.miHttp.realInsert(datos)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public delete(datos)  {

    return this.miHttp.realDelete(datos)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public subirFoto(foto)  {           //-

    return this.miHttp.realSubirFoto(foto)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }  



  public login(datos)  {
    return this.miHttp.realLogin(datos)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  
  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }
}