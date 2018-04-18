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
      get('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/contrato').
      map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  generateContratoWithCustomer(data): Observable<string> {
	  var stringUrl = 'http://node7458-newton.br1.saphir.global/sistemadevendas/rest/contrato/generateWithCustomer?';
	  stringUrl = stringUrl + 'idCliente=' + data.idCustomer + '&idBanco=' + data.idBanco;
    const json = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(stringUrl,
      json, options).map(res => res.json());
  }
  
  generateContratoWithoutCustomer(data): Observable<string> {
	  var url = 'http://node7458-newton.br1.saphir.global/sistemadevendas/rest/contrato/generateWithoutCustomer?';
	  url = url + 'nomeCli=' + data.nomeCli + '&idadeCli=' + data.idadeCli + '&idBanco=' + data.idBanco;
	    const json = JSON.stringify(data);
	    const headers = new Headers({ 'Content-Type': 'application/json' });
	    const options = new RequestOptions({ headers: headers });
	    return this._http.
	      post(url,
	      json, options).map(res => res.json());
	  }
  
  editContrato(contrato: Contrato): Observable<any> {
	    const json = JSON.stringify(contrato);
	    const headers = new Headers({ 'Content-Type': 'application/json' });
	    const options = new RequestOptions({ headers: headers });
	    return this._http.
	      post('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/contrato/alterar',
	      json, options).map(res => res.json());
	  }

	excluiContrato(contrato: Contrato): Observable<any> {
		    const json = JSON.stringify(contrato);
		    const headers = new Headers({ 'Content-Type': 'application/json' });
		    const options = new RequestOptions({ headers: headers });
		    return this._http.
		      post('http://node7458-newton.br1.saphir.global/sistemadevendas/rest/contrato/excluir',
		      json, options).map(res => res.json());
		  }
  
  
}
