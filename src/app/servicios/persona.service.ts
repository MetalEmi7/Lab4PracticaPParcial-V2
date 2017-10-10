import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonaService {
  constructor(public http:Http) { }



  public insert(datos)  {
    let url = "http://localhost/slim/apirest/personas/insert";

    return this.http.post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public login(datos)  {
    let url = "http://localhost/slim/apirest/login/signin";
    return this.http
    .post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public delete(datos)  {
    let url = "http://localhost/slim/apirest/personas/delete";

    return this.http.post(url, datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

  
    public select()  {
      let url = "http://localhost/slim/apirest/personas/";
  
      return this.http
      .get(url)
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