import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(public http:Http) { }

  public realSelect()  {
    let url = "http://localhost/slim/apirest/usuarios/";

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  
  public realSelectUsuario(usuario)  {
    let url = "http://localhost/slim/apirest/usuarios/" + usuario.id;

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realInsert(datos)  {
    console.log(datos);
    let url = "http://localhost/slim/apirest/usuarios/insert";

    return this.http
    .post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realDelete(datos)  {
    let url = "http://localhost/slim/apirest/usuarios/delete";

    return this.http
    .post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realDeleteUsuario(dato_id)  {
    let url = "http://localhost/slim/apirest/usuarios/delete/" + dato_id;

    return this.http
    .post(url, dato_id)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realSubirFoto(foto)  {
    let url = "http://localhost/slim/apirest/usuarios/subirFoto";            //-

    return this.http
    .post(url, foto)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }  




  public realLogin(datos)  {
    let url = "http://localhost/slim/apirest/login/signin";
    
    return this.http.post(url, datos)
    .toPromise()
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
