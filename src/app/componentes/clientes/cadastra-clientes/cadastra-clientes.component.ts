import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../../../service/consulta-cep.service';

@Component({
  selector: 'app-cadastra-clientes',
  templateUrl: './cadastra-clientes.component.html',
  styleUrl: './cadastra-clientes.component.css',
})
export class CadastraClientesComponent implements OnInit {
  dadosCliente = {
    idCliente: '1',
    nome: 'Ricardo Del Vecchio (TESTANDO)',
    cpf: '',
    telefone: '',
    celular: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    fantasia: '',
    razaoSocial: '',
    cnpj: '',
    tipoPgto: '',
    sfobras: '',
    cno: '',
    mangueira: '',
    ie: '',
    volume: '',
    ajudanteHora: '',
    observacao: '',
    modelo: 'modelo1',
  };

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: [''],
      modelo: ['modelo1'],
    });
  }

  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, form);
      });
    }
  }

  populandoEndereco(dados: any, form: NgForm) {
    form.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }

  // cadastrar(form: NgForm){
  //   // console.log('Cliente cadastrado com sucesso!');
  //   console.log(form.controls);
  // }

  cadastrar(form: any) {
    console.log(form);
    if (form.valid) {
      this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
      alert('Formulário enviado');
    } else {
      console.log('Formulário inválido');
      alert('Formulário inválido!');
    }
  }

  cancelar() {
    alert('Ação cancelada!');
  }
}
