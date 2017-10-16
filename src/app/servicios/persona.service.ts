import { Injectable } from '@angular/core';

import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonaService {
  constructor(public http:Http) { }

  public insert(datos)  {
    let url = "http://localhost/Lab4PracticaPParcial/slim/index.php/personas/insert";

    return this.http
    .post(url, datos)
    .toPromise()
    .then()
    .catch()
  }


  public login(datos)  {
    let url = "http://localhost/Lab4PracticaPParcial/slim/index.php/personas/login";

    return this.http
    .get(url, datos)
    .toPromise()
    .then()
    .catch()
  }


  public delete(datos)  {
    let url = "http://localhost/Lab4PracticaPParcial/slim/index.php/personas/delete";

    return this.http
    .post(url, datos)
    .toPromise()
    .then()
    .catch()
  }

  
    public select()  {
      let url = "http://localhost/Lab4PracticaPParcial-master/slim/personas";
  
      return this.http
      .get(url)
      .toPromise()
      .then()
      .catch()
    }





  
  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }
}