import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export class EditarClientesComponent implements OnInit {

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

  editarCliente() {
    this.service.editar(this.cliente).subscribe(() => {
      this.router.navigate(['/consultar-clientes'])
    })
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
