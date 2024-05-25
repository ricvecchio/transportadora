import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css'
})
export class CadastrarPedidosComponent implements OnInit {
  
  dadosPedido = {
    id: '1',
    fantasia: 'Transportadora São Tomé',
    razaosocial: 'Transportadora e entregadoria São Tomé Ltda',
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

  listaPedidos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim. ',
      autoria: '',
      modelo: 'modelo1'
    },
  ];

}

