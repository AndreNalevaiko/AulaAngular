import { Component } from '@angular/core';
import { HttpClienteService } from './httpcliente.service'
import { HttpBancoService } from './httpbanco.service'
import { Cliente } from './cliente.component'
import { Banco } from './banco.component'

@Component({
  selector: 'app-root',
  templateUrl: './cliente.component.html',
  providers: [HttpClienteService, HttpBancoService] 
})
export class HttpClienteComponent {
  clientes: Cliente[];
  bancos: Banco[];
  cliente: Cliente;
  banco: Banco;
  clienteContract: Cliente;
  is_edit = false;
  new_contract = false;

  constructor(private httpClienteS: HttpClienteService, private httpBancoS: HttpBancoService) {
    this.cliente = new Cliente();
    this.getClientes();
    this.getBancos();
  }

  getClientes() {
    this.httpClienteS.getClientes().subscribe(
      clientes => this.clientes = clientes,
      error => alert(error),
      () => console.log('terminou')
    );
  }
  
  getBancos() {
    this.httpBancoS.getBancos().subscribe(
      bancos => this.bancos = bancos,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addCliente() {
	  if(this.is_edit){
		  this.httpClienteS.editCliente(this.cliente).subscribe(
			      data => data,
			      error => alert(error),
			      () => this.getClientes()
		      );
		  this.is_edit = false;
		  this.cliente.id = null;
		  this.cliente.nome = null;
		  this.cliente.idade = null;
	  } else {
		  this.httpClienteS.addCliente(this.cliente).subscribe(
				  data => data,
				  error => alert(error),
				  () => this.getClientes()
		  	);
		  this.cliente.id = null;
		  this.cliente.nome = null;
		  this.cliente.idade = null;
	  }
  }
    
	editCliente(cliente) {
	    this.cliente.nome = cliente.nome;
	    this.cliente.idade = cliente.idade;
	    this.cliente.id = cliente.id;
	    
	    this.is_edit = true;
  }
	
	removeCliente(cliente) {
		this.httpClienteS.excluiCliente(cliente).subscribe(
				  data => data,
				  error => alert(error),
				  () => this.getClientes()
		  	);
	    
  }
	
	cadastrarContrato(cliente) {
	    this.clienteContract = cliente;
	    console.log('PASSOU AQUI');
	    this.new_contract = true;
  }
  
}
