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
    idCliente: '',
    nome: '',
    cpfcnpj: '',
    telefone: '',
    celular:  '',
    email:  '',
    cep:  '',
    logradouro:  '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };


  larguraCliente(): string {
    if (this.dadosPedido.nome.length >= 256) {
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
