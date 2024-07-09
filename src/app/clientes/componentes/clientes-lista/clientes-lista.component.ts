import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit {

  @Input() clientes: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['idCliente', 'nome', 'telefone', 'email', 'acao'];

  constructor() {}

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

}
