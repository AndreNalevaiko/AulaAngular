import { Component } from '@angular/core';
import { HttpClienteService } from './httpcliente.service'
import { Cliente } from './cliente.component'

@Component({
  selector: 'app-root',
  templateUrl: './cliente.component.html',
  providers: [HttpClienteService] 
})
export class HttpClienteComponent {
  clientes: Cliente[];
  cliente: Cliente;
  is_edit = false;

  constructor(private httpClienteS: HttpClienteService) {
    this.cliente = new Cliente();
    this.getClientes();
  }

  getClientes() {
    this.httpClienteS.getClientes().subscribe(
      clientes => this.clientes = clientes,
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
	  } else {
		  this.httpClienteS.addCliente(this.cliente).subscribe(
				  data => data,
				  error => alert(error),
				  () => this.getClientes()
	 
    );
	  }
  }
    
	editCliente(cliente) {
	    this.cliente.nome = cliente.nome;
	    this.cliente.idade = cliente.idade;
	    this.cliente.id = cliente.id;
	    
	    this.is_edit = true;
  }
  
}
