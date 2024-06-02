import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css',
})
export class CadastrarPedidosComponent implements OnInit {
  @Input() dadosPedido: Pedido = {
    fantasia: '',
    razaosocial: '',
    telefone: '',
    modelo: 'modelo1',
  };

  larguraPedido(): string {
    if (this.dadosPedido.razaosocial.length >= 256) {
      return 'pedido-g';
    }
    return 'pedido-p';
  }

  constructor(
    private service: PedidoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  cadastrarPedido() {
    this.service.criar(this.dadosPedido).subscribe(() => {
      alert("Pedido cadastrado com sucesso!")
      this.router.navigate(['/consultar-pedidos']);
    });
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

  pedidoEmitido() {
    alert('Pedido Emitido!');
  }
}
