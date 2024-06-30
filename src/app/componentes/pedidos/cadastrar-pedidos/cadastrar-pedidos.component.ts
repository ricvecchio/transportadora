import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, Observable, of, startWith } from 'rxjs';

import { ConsultaCepService } from '../../../service/consulta-cep.service';
import { PedidoService } from '../pedido.service';

interface Metros {
  value: string;
  viewValue: string;
}

interface Volumes {
  value: string;
  viewValue: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css',
})
export class CadastrarPedidosComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [''],
    cpf: [''],
    telefone: [''],
    celular: [''],
    email: [''],
    cep: [''],
    logradouro: [''],
    numero: [''],
    complemento: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
    fantasia: [''],
    razaoSocial: [''],
    cnpj: [''],
    tipoPgto: [''],
    cepEntrega: [''],
    logradouroEntrega: [''],
    numeroEntrega: [''],
    complementoEntrega: [''],
    bairroEntrega: [''],
    cidadeEntrega: [''],
    estadoEntrega: [''],
    sfobras: [''],
    cno: [''],
    mangueira: [''],
    ie: [''],
    volume: [''],
    valor: [''],
    preco1: [''],
    preco2: [''],
    preco3: [''],
    preco4: [''],
    preco5: [''],
    preco6: [''],
    ajudanteHora: [''],
    observacao: [''],
    idPedido: [''],
    status: ['Em Aberto'],
  });

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
    private formBuilder: NonNullableFormBuilder,
    private service: PedidoService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    // this.isAdressChecked = this.formGroup.get('deliveryAddress')?.value || false;
    // this.formGroup.get('deliveryAddress')?.valueChanges.subscribe(value => {
    //   this.isAdressChecked = value || false;
    // });

    // this.isPaymentChecked = this.formGroup.get('cashPayment')?.value || false;
    // this.formGroup.get('cashPayment')?.valueChanges.subscribe(value => {
    //   this.isPaymentChecked = value || false;
    // });
  }

  isAdressChecked = false;
  isPaymentChecked = false;

  dadosPedido: any = {
    id: '2',
    nome: '',
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
    cepEntrega: '',
    logradouroEntrega: '',
    numeroEntrega: '',
    complementoEntrega: '',
    bairroEntrega: '',
    cidadeEntrega: '',
    estadoEntrega: '',
    sfobras: '',
    cno: '',
    mangueira: '',
    ie: '',
    volume: '',
    preco1: '',
    preco2: '',
    preco3: '',
    preco4: '',
    preco5: '',
    preco6: '',
    ajudanteHora: '',
    observacao: '',
    idPedido: 1,
    modelo: 'modelo1',
  };

  formGroup = this.formBuilder.group({
    idCliente: [{ value: this.dadosPedido.id, disabled: true }],
    buscarCliente: ['', Validators.required],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    celular: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', [Validators.required, Validators.pattern('^(d{5})(-?d{3})$')]],
    logradouro: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    fantasia: [''],
    razaoSocial: [''],
    cnpj: [''],
    tipoPgto: [''],
    cashPayment: [false, Validators.requiredTrue],
    deliveryAddress: [false, Validators.requiredTrue],
    cepEntrega: [''],
    logradouroEntrega: [''],
    numeroEntrega: [''],
    complementoEntrega: [''],
    bairroEntrega: [''],
    cidadeEntrega: [''],
    estadoEntrega: [''],
    sfobras: [''],
    cno: [''],
    mangueira: [''],
    ie: [''],
    volume: [''],
    preco1: [''],
    preco2: [''],
    preco3: [''],
    preco4: [''],
    preco5: [''],
    preco6: [''],
    ajudanteHora: [''],
    observacao: [''],
    idPedido: [''],
  });

  myControl = new FormControl<string | User>('');

  options: User[] = [
    { name: 'Bruno' },
    { name: 'Brunelson' },
    { name: 'Pedrola' },
    { name: 'Jeréba' },
    { name: 'Ricardo 01' },
    { name: 'Ricardo 02' },
    { name: 'Ricardo 03' },
    { name: 'Ricardola' },
    { name: 'Salomonstro' },
  ];

  filteredOptions: Observable<User[]> = of([]);
  list: any;

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue),
    );
  }

  selectedMetros!: string;
  metros: Metros[] = [
    { value: '15 metros', viewValue: '15 metros' },
    { value: '30 metros', viewValue: '30 metros' },
    { value: '45 metros', viewValue: '45 metros' },
    { value: '60 metros', viewValue: '60 metros' },
    { value: '75 metros', viewValue: '75 metros' },
    { value: '90 metros', viewValue: '90 metros' },
  ];

  listaVolume!: string;
  volumes: Volumes[] = [
    { value: 'cx-5m³', viewValue: 'cx-5m³' },
    { value: 'cx-10m³', viewValue: 'cx-10m³' },
    { value: 'cx-15m³', viewValue: 'cx-15m³' },
    { value: 'lav-5m³', viewValue: 'lav-5m³' },
    { value: 'lav-10m³', viewValue: 'lav-10m³' },
    { value: 'lav-15m³', viewValue: 'lav-15m³' },
  ];

  consultaCEP() {
    const cep = this.formulario.get('cep')?.value;
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((dados: any) => {
        this.formulario.patchValue({
          logradouro: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        });
      });
    }
  }

  dataAtual: Date = new Date();

  checked = false;
  disabled = false;

  onPaymentCheckBoxChange(event: any): void {
    this.isPaymentChecked = event.checked;
  }

  onToggleChange(event: any): void {
    this.isAdressChecked = event.checked;
  }

  onSubmit() {
    this.service.salvar(this.formulario.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError(),
    );
  }

  private onSucess() {
    this.snackBar.open('Pedido Salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o pedido!', '', { duration: 5000 });
  }
}
