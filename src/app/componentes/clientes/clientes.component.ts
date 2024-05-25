import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  dadosCliente = {
    id: '1',
    fantasia: 'Transportadora São Tomé',
    razaosocial: 'Transportadora e entregadoria São Tomé Ltda',
    telefone: '(11) 9 6448-2908',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarCliente() {
    alert("Cliente cadastrado com sucesso!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }
}