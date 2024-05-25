import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-clientes',
  templateUrl: './cadastra-clientes.component.html',
  styleUrl: './cadastra-clientes.component.css'
})
export class CadastraClientesComponent implements OnInit {

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