import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-clientes',
  templateUrl: './cadastra-clientes.component.html',
  styleUrl: './cadastra-clientes.component.css'
})
export class CadastraClientesComponent implements OnInit {

  dadosCliente = {
    idCliente: '1',
    fantasia: 'Transportadora São Tomé',
    razaoSocial: 'Transportadora e entregadoria São Tomé Ltda',
    telefone: '(11) 9 6448-2908',
    contato: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
    cpfCnpj: '',
    sfobras: '',
    cno: '',
    mangueira: '',
    tipoPgto: '',
    ie: '',
    volume: '',
    ajudanteHora: '',
    observacao: '',
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