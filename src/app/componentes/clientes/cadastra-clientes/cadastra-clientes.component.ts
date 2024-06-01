import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-clientes',
  templateUrl: './cadastra-clientes.component.html',
  styleUrl: './cadastra-clientes.component.css'
})
export class CadastraClientesComponent implements OnInit {

  dadosCliente = {
    idCliente: '1',
    nome: '',
    cpf: '',
    telefone: '(11) 5045-8908',
    celular: '(11) 9 6448-2908',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',

    fantasia: 'Transportadora São Tomé',
    razaoSocial: 'Transportadora e entregadoria São Tomé Ltda',
    cnpj: '',

    tipoPgto: '',
    sfobras: '',
    cno: '',
    mangueira: '',

    ie: '',
    volume: '',
    ajudanteHora: '',
    observacao: '',
    modelo: 'modelo1'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // cadastrar(form: NgForm){
  //   // console.log('Cliente cadastrado com sucesso!');
  //   console.log(form.controls);
  // }
  cadastrar(form : any){
    console.log(form);
    if(form.valid){
      this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
      alert('Formulário enviado');
    }else{
      console.log('Formulário inválido');
      alert('Formulário inválido!');
    }
  }
  
  cancelar() {
    alert("Ação cancelada!")
  }
}