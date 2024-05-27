import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit {


  listaPedidos = [
    {
      id: '1',
      fantasia: 'Passo informações para o componente filho',
      razaosocial: 'Dados da lista da classe Consultar Pedidos',
      telefone: '(11) 9 6448-2908',
      modelo: 'modelo1'
    },
    {
      id: '2',
      fantasia: 'Minha propriedade é decorada com @Input()',
      razaosocial: 'Dados da lista da classe Consultar Pedidos',
      telefone: '(11) 9 6448-2908',
      modelo: 'modelo2'
    },
    {
      id: '3',
      fantasia: 'Terceira registro da minha lista',
      razaosocial: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      telefone: '(11) 9 6448-2908',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
