import { Injectable } from '@angular/core';

import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(public http:Http) { }

  public insert(){}
}
