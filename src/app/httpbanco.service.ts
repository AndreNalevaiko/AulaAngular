import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Banco } from './banco.component'

@Injectable()
export class HttpBancoService {
  constructor(private _http: Http) { }

  getBancos(): Observable<Banco[]> {
    return this._http.
      get('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/banco').
      map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  addBanco(banco: Banco): Observable<string> {
    const json = JSON.stringify(banco);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/banco',
      json, options).map(res => res.json());
  }
  
  editBanco(banco: Banco): Observable<any> {
	    const json = JSON.stringify(banco);
	    const headers = new Headers({ 'Content-Type': 'application/json' });
	    const options = new RequestOptions({ headers: headers });
	    return this._http.
	      post('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/banco/alterar',
	      json, options).map(res => res.json());
	  }

	excluiBanco(banco: Banco): Observable<any> {
		    const json = JSON.stringify(banco);
		    const headers = new Headers({ 'Content-Type': 'application/json' });
		    const options = new RequestOptions({ headers: headers });
		    return this._http.
		      post('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/banco/excluir',
		      json, options).map(res => res.json());
		  }
  
  
}
