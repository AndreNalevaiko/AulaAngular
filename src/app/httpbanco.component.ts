import { Component } from '@angular/core';
import { HttpBancoService } from './httpbanco.service'
import { Banco } from './banco.component'

@Component({
  selector: 'app-root',
  templateUrl: './banco.component.html',
  providers: [HttpBancoService] 
})
export class HttpBancoComponent {
  bancos: Banco[];
  banco: Banco;

  constructor(private httpBancoS: HttpBancoService) {
    this.banco = new Banco();
    this.getBancos();
  }

  getBancos() {
    this.httpBancoS.getBancos().subscribe(
      bancos => this.bancos = bancos,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addBanco() {
	  if(this.is_edit){
		  this.httpBancoS.editBanco(this.banco).subscribe(
			      data => data,
			      error => alert(error),
			      () => this.getBancos()
			    );
		  this.is_edit = false;
		  this.banco.id = null;
		  this.banco.nome = null;
	  } else {
		  this.httpBancoS.addBanco(this.banco).subscribe(
			      data => data,
			      error => alert(error),
			      () => this.getBancos()
			    );
		  this.banco.id = null;
		  this.banco.nome = null;
	  }
    
  }
  
    
	editBanco(banco) {
	    this.banco.nome = banco.nome;
	    this.banco.id = banco.id;
	    
	    this.is_edit = true;
  }
	
	removeBanco(banco) {
		this.httpBancoS.excluiBanco(banco).subscribe(
				  data => data,
				  error => alert(error),
				  () => this.getBancos()
		  	);
	    
  }
  
}
