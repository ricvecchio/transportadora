import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.css',
})
export class CadastrarClientesComponent implements OnInit {
  @Input() dadosPedido: Cliente = {
    fantasia: '',
    razaosocial: '',
    telefone: '',
    modelo: 'modelo1',
  };

  larguraCliente(): string {
    if (this.dadosPedido.razaosocial.length >= 256) {
      return 'cliente-g';
    }
    return 'cliente-p';
  }

  constructor(
    private service: ClienteService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  cadastrarCliente() {
    this.service.criar(this.dadosPedido).subscribe(() => {
      alert("Cliente cadastrado com sucesso!")
      this.router.navigate(['/consultar-clientes']);
    });
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
