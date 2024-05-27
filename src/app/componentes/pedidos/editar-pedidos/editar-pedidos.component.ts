import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-editar-pedidos',
  templateUrl: './editar-pedidos.component.html',
  styleUrl: './editar-pedidos.component.css'
})
export class EditarPedidosComponent implements OnInit {

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

  editarPedido() {
    this.service.editar(this.pedido).subscribe(() => {
      this.router.navigate(['/consultar-pedidos'])
    })
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
