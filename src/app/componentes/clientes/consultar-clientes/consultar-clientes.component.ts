import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consultar-clientes',
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent implements OnInit {


  listaClientes: Cliente[] = [];

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaClientes) => {
      this.listaClientes = listaClientes
    })
  }

}
