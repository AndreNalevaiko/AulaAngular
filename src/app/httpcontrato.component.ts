import { Component } from '@angular/core';
import { HttpContratoService } from './httpcontrato.service'
import { Contrato } from './contrato.component'

@Component({
  selector: 'app-root',
  templateUrl: './contrato.component.html',
  providers: [HttpContratoService] 
})
export class HttpContratoComponent {
  contratos: Contrato[];
  contrato: Contrato;

  constructor(private httpContratoS: HttpContratoService) {
    this.contrato = new Contrato();
    this.getContratos();
  }

  getContratos() {
    this.httpContratoS.getContratos().subscribe(
      contratos => this.contratos = contratos,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addContrato() {
	  if(this.is_edit){
		  this.httpContratoS.editContrato(this.contrato).subscribe(
			      data => data,
			      error => alert(error),
			      () => this.getContratos()
			    );
		  this.is_edit = false;
		  this.contrato.id = null;
		  this.contrato.nome = null;
	  } else {
		  this.httpContratoS.addContrato(this.contrato).subscribe(
			      data => data,
			      error => alert(error),
			      () => this.getContratos()
			    );
		  this.contrato.id = null;
		  this.contrato.nome = null;
	  }
    
  }
  
    
	editContrato(contrato) {
	    this.contrato.nome = contrato.nome;
	    this.contrato.id = contrato.id;
	    
	    this.is_edit = true;
  }
	
	removeContrato(contrato) {
		this.httpContratoS.excluiContrato(contrato).subscribe(
				  data => data,
				  error => alert(error),
				  () => this.getContratos()
		  	);
	    
  }
  
}
