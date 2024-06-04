import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-clientes',
  templateUrl: './excluir-clientes.component.html',
  styleUrl: './excluir-clientes.component.css'
})
export class ExcluirClientesComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    fantasia: '',
    razaosocial: '',
    telefone: '',
    modelo: ''
  };

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((cliente) => {
      this.cliente = cliente
    })
  }

  excluirCliente() {
    if(this.cliente.id) {
      this.service.excluir(this.cliente.id).subscribe(() => {
        this.router.navigate(['/consultar-cliente'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
