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
  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

  formulario!: FormGroup;

  isAdressChecked = false;
  isPaymentChecked = false

  @Input() dadosPedido = {
    id: 1,
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
    private _formBuilder: FormBuilder,
    private service: PedidoService,
  ) {}

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

  consultaCEPEntrega(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEnderecoEntrega(resultado, form);
      });
    }
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

  nomeFormControl = new FormControl('', [
    Validators.required,
  ]);

  nomeFantasiaFormControl = new FormControl('', [
    Validators.required,
  ]);

  razaoSocialFormControl = new FormControl('', [
    Validators.required,
  ]);

  mangueiraFormControl = new FormControl('', [
    Validators.required,
  ]);

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
    if(form.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/consultar-pedidos'])
      })
    }
  }

  cancelar() {
    alert('Ação cancelada!');
  }

  onPaymentCheckBoxChange(event: any): void {
    this.isPaymentChecked = event.checked;
  }

  onToggleChange(event: any): void {
    this.isAdressChecked = event.checked;
  }
}
