import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit {


  listaPedidos: Pedido[] = [];

  constructor(private service: PedidoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPedidos) => {
      this.listaPedidos = listaPedidos
    })
  }

}
