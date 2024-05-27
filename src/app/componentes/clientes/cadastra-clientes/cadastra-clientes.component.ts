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

  dadosCliente3 = {
    id: '3',
    fantasia: 'Transportadora São Tomé 3',
    razaosocial: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
    telefone: '(11) 9 6448-2908',
    modelo: 'modelo3'
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