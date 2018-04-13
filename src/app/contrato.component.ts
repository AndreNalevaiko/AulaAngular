import { Component } from '@angular/core';
import { Banco } from './banco.component';
import { Cliente } from './cliente.component';

export class Contrato {
	public id: number;
	public cliente: Cliente;
	public banco: Banco;


  constructor() {
  }
}
