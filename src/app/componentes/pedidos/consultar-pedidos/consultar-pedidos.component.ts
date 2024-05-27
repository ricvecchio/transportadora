import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit {


  listaPedidos = [
    // {
    //   id: '1',
    //   fantasia: 'Passo informações para o componente filho',
    //   razaosocial: 'Dados da lista da classe Consultar Pedidos',
    //   telefone: '(11) 9 6448-2908',
    //   modelo: 'modelo1'
    // },
    // {
    //   id: '2',
    //   fantasia: 'Minha propriedade é decorada com @Input()',
    //   razaosocial: 'Dados da lista da classe Consultar Pedidos',
    //   telefone: '(11) 9 6448-2908',
    //   modelo: 'modelo2'
    // },
    // {
    //   id: '3',
    //   fantasia: 'Terceira registro da minha lista',
    //   razaosocial: 'Dados da lista da classe Consultar Pedidos',
    //   telefone: '(11) 9 6448-2908',
    //   modelo: 'modelo3'
    // }
  ];

  // larguraPensamento(): string {
  //   if(this.pensamento.conteudo.length >= 256) {
  //     return 'pensamento-g'
  //   }
  //   return 'pensamento-p'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
