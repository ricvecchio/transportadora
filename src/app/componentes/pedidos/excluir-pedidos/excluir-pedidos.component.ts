import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pedidos',
  templateUrl: './excluir-pedidos.component.html',
  styleUrl: './excluir-pedidos.component.css'
})
export class ExcluirPedidosComponent implements OnInit {

  pedido: Pedido = {
    id: 0,
    fantasia: '',
    razaosocial: '',
    telefone: '',
    modelo: ''
  };

  constructor(
    private service: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pedido) => {
      this.pedido = pedido
    })
  }

  excluirPedido() {
    if(this.pedido.id) {
      this.service.excluir(this.pedido.id).subscribe(() => {
        this.router.navigate(['/consultar-pedidos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
