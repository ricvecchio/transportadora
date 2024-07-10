import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, startWith } from 'rxjs';
import { Cliente } from '../../modelo/cliente';
import { ConsultaCepService } from '../../../pedidos/service/consulta-cep.service';
import { ClienteService } from '../../servicos/cliente.service';
import { Pedido } from '../../../pedidos/model/pedido';

export interface User {
  name: string;
}

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css',
})
export class ClienteFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private consultaCepService: ConsultaCepService,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];

      this.formulario = this.formBuilder.group({
        idCliente: [cliente.idCliente],
        nome: [cliente.nome, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        cpfcnpj: [cliente.cpfcnpj, [Validators.required]],
        telefone: [cliente.telefone, [Validators.required]],
        celular: [cliente.celular, [Validators.required]],
        email: [cliente.email, [Validators.required]],
        cep: [cliente.cep],
        logradouro: [cliente.logradouro, [Validators.required]],
        numero: [cliente.numero],
        complemento: [cliente.complemento],
        bairro: [cliente.bairro],
        cidade: [cliente.cidade],
        estado: [cliente.estado],
        pedidos: this.formBuilder.array(this.obterPedidos(cliente), Validators.required)
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  private obterPedidos(cliente: Cliente) {
    const pedidos = [];
    if (cliente?.pedidos) {
      cliente.pedidos.forEach(pedido => pedidos.push(this.criarPedido(pedido)));
    } else {
      pedidos.push(this.criarPedido());
    }
    return pedidos;
  }

  private criarPedido(pedido: Pedido = { idPedido: '', nomePedido: '', razaoSocial: '' , cpfcnpjPedido: '' , tipoPgto: ''
    , cepPedido: '' , logradouroPedido: '' , numeroPedido: '' , complementoPedido: '' , bairroPedido: '' , cidadePedido: '' , estadoPedido: ''
    , sfobras: '' , cno: '' , ie: '' , mangueira: '' , volume: '' , precoCx5: '' , precoCx10: ''
    , precoCx15: '' , precoLv5: '' , precoLv10: '' , precoLv15: '' , ajudanteHora: '' , observacao: ''
  }) {
    return this.formBuilder.group({
      idPedido: [pedido.idPedido],
      nomePedido: ['' , [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      razaoSocial: [''],
      cpfcnpjPedido: [''],
      tipoPgto: [pedido.tipoPgto],
      cepPedido: [pedido.cepPedido],
      logradouroPedido: [pedido.logradouroPedido],
      numeroPedido: [pedido.numeroPedido],
      complementoPedido: [pedido.complementoPedido],
      bairroPedido: [pedido.bairroPedido],
      cidadePedido: [pedido.cidadePedido],
      estadoPedido: [pedido.estadoPedido],
      sfobras: [pedido.sfobras],
      cno: [pedido.cno],
      ie: [pedido.ie],
      mangueira: [pedido.mangueira],
      volume: [pedido.volume],
      precoCx5: [pedido.precoCx5],
      precoCx10: [pedido.precoCx10],
      precoCx15: [pedido.precoCx15],
      precoLv5: [pedido.precoLv5],
      precoLv10: [pedido.precoLv10],
      precoLv15: [pedido.precoLv15],
      ajudanteHora: [pedido.ajudanteHora],
      observacao: [pedido.observacao]
    });
  }

  // formulario = this.formBuilder.group({
  //   idCliente: [''],
  //   nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100),],],
  //   cpfcnpj: ['', Validators.required],
  //   telefone: ['', Validators.required],
  //   celular: [''],
  //   email: ['', [Validators.required, Validators.email]],
  //   cep: ['', [Validators.required, Validators.pattern('^(d{5})(-?d{3})$')]],
  //   logradouro: [''],
  //   numero: [''],
  //   complemento: [''],
  //   bairro: [''],
  //   cidade: [''],
  //   estado: [''],
  // });

  // clientes: Cliente[] = [];

  // @Input() dadosCliente: Cliente = {
  //   idCliente: '',
  //   nome: '',
  //   cpfcnpj: '',
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
  // };

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
    this.service.salvar(this.formulario.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError(),
    );
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
