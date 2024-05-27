import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css'
})
export class CadastrarPedidosComponent implements OnInit {
  
  @Input() dadosPedido = {
    id: '1',
    fantasia: 'I love Angular',
    razaosocial: 'Testando modelo com @input - dados Cadastrar pedidos',
    telefone: '(11) 9 6448-2908',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarPedido() {
    alert("Pedido cadastrado com sucesso!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }

  pedidoEmitido() {
    alert("Pedido Emitido!")
  }

}

