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
    this.httpBancoS.addBanco(this.banco).subscribe(
      data => data,
      error => alert(error),
      () => this.getBancos()
    );
    
   


  }
  
}
