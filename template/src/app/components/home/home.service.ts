import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMessage() : Promise<string> {
    return this.http.get('/api/hello')
          .toPromise()
          .then(response => response.json().message as string);
  }
}
