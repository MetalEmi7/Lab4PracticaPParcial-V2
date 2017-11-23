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
    let url = "http://localhost/slim/apirest/personas/";

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  
  public realSelectPersona(persona)  {
    let url = "http://localhost/slim/apirest/personas/" + persona.id;

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realInsert(datos)  {
    console.log(datos);
    let url = "http://localhost:80/slim/apirest/personas/insert";

    return this.http
    .post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realDelete(datos)  {
    let url = "http://localhost/slim/apirest/personas/delete";

    return this.http
    .post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realSubirFoto(foto)  {
    let url = "http://localhost/slim/apirest/personas/subirFoto";            //-

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
