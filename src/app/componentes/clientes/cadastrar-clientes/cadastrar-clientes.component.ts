import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, startWith } from 'rxjs';

import { ConsultaCepService } from '../../../service/consulta-cep.service';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

export interface User {
  name: string;
}

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.css',
})
export class CadastrarClientesComponent implements OnInit {

  @Input() dadosPedido: Cliente = {
    idCliente: '',
    nome: '',
    cpfcnpj: '',
    telefone: '',
    celular:  '',
    email:  '',
    cep:  '',
    logradouro:  '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private consultaCepService: ConsultaCepService,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  formulario = this.formBuilder.group({
    idCliente: [''],
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    cpfcnpj: ['', Validators.required],
    telefone: ['', Validators.required],
    celular: [''],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', [Validators.required, Validators.pattern('^(d{5})(-?d{3})$')]],
    logradouro: [''],
    numero: [''],
    complemento: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
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

  consultaCEP() {
    const cep = this.formulario.get('cep')?.value;
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((dados: any) => {
        this.formulario.patchValue({
          logradouro: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf,
        });
      });
    }
  }

  getMensagemErro(fieldNome: string) {
    const field = this.formulario.get(fieldNome);

    if (field?.hasError('required')) {
      return 'Campo Obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors
        ? field.errors['minlength']['requiredLength']
        : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors
        ? field.errors['maxlength']['requiredLength']
        : 200;
      return `Tamanho máximo precisa ser de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }

  dataAtual: Date = new Date();

  checked = false;
  disabled = false;

  onSubmit() {
    // this.service.salvar(this.formulario.value).subscribe(
    //   (result) => this.onSucess(),
    //   (error) => this.onError(),
    // );
  }

  private onSucess() {
    this.snackBar.open('Cliente Salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o cliente!', '', { duration: 5000 });
  }
}
