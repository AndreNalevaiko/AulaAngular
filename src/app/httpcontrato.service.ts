import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Contrato } from './contrato.component'

@Injectable()
export class HttpContratoService {
  constructor(private _http: Http) { }

  getContratos(): Observable<Contrato[]> {
    return this._http.
      get('http://localhost:8080/sistemadevendas/rest/contrato').
      map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  addContrato(contrato: Contrato): Observable<string> {
    const json = JSON.stringify(contrato);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/sistemadevendas/rest/contrato',
      json, options).map(res => res.json());
  }
  
  editContrato(contrato: Contrato): Observable<any> {
	    const json = JSON.stringify(contrato);
	    const headers = new Headers({ 'Content-Type': 'application/json' });
	    const options = new RequestOptions({ headers: headers });
	    return this._http.
	      post('http://localhost:8080/sistemadevendas/rest/contrato/alterar',
	      json, options).map(res => res.json());
	  }

	excluiContrato(contrato: Contrato): Observable<any> {
		    const json = JSON.stringify(contrato);
		    const headers = new Headers({ 'Content-Type': 'application/json' });
		    const options = new RequestOptions({ headers: headers });
		    return this._http.
		      post('http://localhost:8080/sistemadevendas/rest/contrato/excluir',
		      json, options).map(res => res.json());
		  }
  
  
}
