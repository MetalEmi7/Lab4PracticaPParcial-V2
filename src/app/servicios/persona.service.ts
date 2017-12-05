import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from "../servicios/http.service";

@Injectable()
export class PersonaService {

  constructor(public miHttp:HttpService)
  {}


  public select()  {
    return this.miHttp.realSelect()
    .then(data=>data)
    .catch(error=>error)
  }


  public selectPersona(persona)  {   
    return this.miHttp.realSelectPersona(persona)
    .then(data=>data)
    .catch(error=>error)
  }


  public insert(datos)  {
    return this.miHttp.realInsert(datos)
    .then(data=>data)
    .catch(error=>error)
  }



  public delete(datos)  {
    return this.miHttp.realDelete(datos)
    .then(data=>data)
    .catch(error=>error)
  }



  public deletePersona(dato_id)  {
    return this.miHttp.realDeletePersona(dato_id)
    .then(data=>data)
    .catch(error=>error)
  }



  public subirFoto(foto)  {           //-
    return this.miHttp.realSubirFoto(foto)
    .then(data=>data)
    .catch(error=>error)
  }  



  public login(datos)  {
    return this.miHttp.realLogin(datos) 
    .then(data=>data)
    .catch(error=>error)
  }


  
  private extraerDatos(resp:Response) {
    return resp.json();
  }

  private handlerError(error:Response | any) {
    return error;
  }
}