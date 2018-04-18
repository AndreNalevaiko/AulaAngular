import { Component } from '@angular/core';
import { HttpContratoService } from './httpcontrato.service'
import { Contrato } from './contrato.component'
import { Banco } from './banco.component'
import { HttpBancoService } from './httpbanco.service'


@Component({
  selector: 'app-root',
  templateUrl: './contrato.component.html',
  providers: [HttpContratoService, HttpBancoService] 
})
export class HttpContratoComponent {
  contratos: Contrato[];
  contrato: Contrato;
  bancos: Banco[];
  nomeCli = '';
  idadeCli = '';
  banco_id = null;
  new_contract = false;

  constructor(private httpContratoS: HttpContratoService, private httpBancoS: HttpBancoService) {
    this.contrato = new Contrato();
    this.getContratos();
    this.getBancos();
  }

  getBancos() {
	    this.httpBancoS.getBancos().subscribe(
	      bancos => this.bancos = bancos,
	      error => alert(error),
	      () => console.log('terminou')
	    );
	  }
  
  getContratos() {
	    this.httpContratoS.getContratos().subscribe(
	      contratos => this.contratos = contratos,
	      error => alert(error),
	      () => console.log('terminou')
	    );
	  }
 

  addContrato() {
	  var contract = {
			  nomeCli: this.nomeCli,
			  idadeCli: this.idadeCli,
			  idBanco: this.banco_id
	  };
	  
	  this.httpContratoS.generateContratoWithoutCustomer(contract).subscribe(
		      data => data,
		      error => alert(error),
		      () => this.getContratos()
		    );
	  this.new_contract = false;
  }
  
  contratoParaNovoCliente(){
	  this.new_contract = false;
  }
  
	
	removeContrato(contrato) {
		this.httpContratoS.excluiContrato(contrato).subscribe(
			  data => data,
			  error => alert(error),
			  () => this.getContratos()
	  	);
	    
	}
  
}
