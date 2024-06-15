import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../../../service/consulta-cep.service';
import { Observable, map, of, startWith } from 'rxjs';

interface Metros {
  value: string;
  viewValue: string;
}

export interface User {
  name: string;
}
/**
 * @title Display value autocomplete
 */

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css',
})
export class CadastrarPedidosComponent implements OnInit {
  statesFaturamento: string[] = [];

  isAdressChecked = false;
  isPaymentChecked = false

  dadosPedido: any = {
    id: 'Google',
    nome: '',
    cpf: '',
    telefone: '',
    celular: '',
    email: '',
    cepEntrega: '',
    logradouro: '',
    numero: '',
    complemento: '',
    referencia: '',
    bairro: '',
    cidade: '',
    estado: '',
    fantasia: '',
    razaoSocial: '',
    cnpj: '',
    sfobras: '',
    cno: '',
    preco: '',
    ajudanteHora: '',
    observacao: '',
  };

  formGroup = this._formBuilder.group({
    idCliente: [{ value: this.dadosPedido.id, disabled: true }],
    buscarCliente: ['', Validators.required],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    celular: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cepCliente: ['', [Validators.required, Validators.pattern('^(d{5})(-?d{3})$')]],
    logradouro: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: [''],
    referencia: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    antasia: ['', Validators.required],
    razaoSocial: ['', Validators.required],
    cnpj: ['', Validators.required],
    sfobras: [''],
    cno: [''],
    metro: [''],
    ie: [''],
    preco1: [''],
    preco2: [''],
    preco3: [''],
    preco4: [''],
    preco5: [''],
    preco6: [''],
    deliveryAddress: [false, Validators.requiredTrue],
    cashPayment: [false, Validators.requiredTrue]
  });

  // @Input() dadosPedido = {
  //   id: 1,
  //   nome: 'Ricardo Del Vecchio (TESTANDO)',
  //   cpf: '',
  //   telefone: '',
  //   celular: '',
  //   email: '',
  //   cep: '',
  //   logradouro: '',
  //   numero: '',
  //   complemento: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  //   fantasia: 'Condomínio Residencial Turquesa',
  //   razaoSocial: 'Condomínio Turquesa',
  //   cnpj: '43.254.354/0001-75',
  //   tipoPgto: '',
  //   cepEntrega: '',
  //   logradouroEntrega: '',
  //   numeroEntrega: '',
  //   complementoEntrega: '',
  //   bairroEntrega: '',
  //   cidadeEntrega: '',
  //   estadoEntrega: '',
  //   sfobras: '',
  //   cno: '',
  //   mangueira: '',
  //   ie: '',
  //   volume: '',
  //   preco: '',
  //   ajudanteHora: '',
  //   observacao: '',
  //   modelo: 'modelo1',
  // };

  // formulario!: FormGroup;

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

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
    // private formBuilder: FormBuilder,
    private _formBuilder: FormBuilder,
  ) {}

  onToggleChange(event: any): void {
    this.isAdressChecked = event.checked;
  }


  onPaymentCheckBoxChange(event: any): void {
    this.isPaymentChecked = event.checked;
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    // this.formulario = this.formBuilder.group({
    //   conteudo: ['Formulario reativo'],
    //   autoria: [''],
    //   modelo: ['modelo1'],
    // });

    this.isAdressChecked = this.formGroup.get('deliveryAddress')?.value || false;
    this.formGroup.get('deliveryAddress')?.valueChanges.subscribe(value => {
      this.isAdressChecked = value || false;
    });

    this.isPaymentChecked = this.formGroup.get('cashPayment')?.value || false;
    this.formGroup.get('cashPayment')?.valueChanges.subscribe(value => {
      this.isPaymentChecked = value || false;
    });
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
  volumes: string[] = [
    'cx-5m³',
    'cx-10m³',
    'cx-15m³',
    'lav-5m³',
    'lav-10m³',
    'lav-15m³',
  ];

  listaPreco!: string;
  precos!: string[];

  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    //     if (cep != '') {
    //       this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
    //         console.log(resultado);
    //         this.populandoEndereco(resultado, form);
    // //INCLUIR IF PARA DIFERENCIAR
    //         this.populandoEnderecoEntrega(resultado, form);
    //       });
    //     }
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

  // REVER PARA NÃO DUPLICAR O MÉTODO
  populandoEnderecoEntrega(dados: any, form: NgForm) {
    form.form.patchValue({
      logradouroEntrega: dados.logradouro,
      complementoEntrega: dados.complemento,
      bairroEntrega: dados.bairro,
      cidadeEntrega: dados.localidade,
      estadoEntrega: dados.uf,
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // cadastrar(form: NgForm){
  //   // console.log('Pedido cadastrado com sucesso!');
  //   console.log(form.controls);
  // }

  dataAtual: Date = new Date();

  checked = false;
  disabled = false;

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
