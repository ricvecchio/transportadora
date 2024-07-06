import { Location } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { PedidoService } from '../pedido.service';
import { Pedido } from '../model/pedido';

interface Metros {
  value: string;
  viewValue: string;
}

interface Volumes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar-pedidos',
  templateUrl: './editar-pedidos.component.html',
  styleUrl: './editar-pedidos.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class EditarPedidosComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private service: PedidoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const pedido: Pedido = this.route.snapshot.data['pedido'];

    this.formulario = this.formBuilder.group({
      idCliente: [''],
      nomePedido: [pedido.nomePedido, [Validators.required, Validators.minLength(5), Validators.maxLength(100)],],
      razaoSocial: [pedido.razaoSocial, Validators.required],
      cpfcnpjPedido: [pedido.cpfcnpjPedido, Validators.required],
      tipoPgto: [pedido.tipoPgto],
      cepPedido: [pedido.cepPedido, [Validators.required, Validators.pattern('^(d{5})(-?d{3})$')]],
      logradouroPedido: [pedido.logradouroPedido, Validators.required],
      numeroPedido: [pedido.numeroPedido, Validators.required],
      complementoPedido: [pedido.complementoPedido, Validators.required],
      bairroPedido: [pedido.bairroPedido, Validators.required],
      cidadePedido: [pedido.cidadePedido, Validators.required],
      estadoPedido: [pedido.estadoPedido, Validators.required],
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

  checked = false;
  isPaymentChecked = false;

  onPaymentCheckBoxChange(event: any): void {
    this.isPaymentChecked = event.checked;
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

  private onError() {
    this.snackBar.open('Erro ao salvar o pedido!', '', { duration: 5000 });
  }

  onCancel() {
    this.location.back();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Pedido> {
    if (route.params && route.params['id']) {
      return this.service.buscarPorId(route.params['id']);
    }
    return of({
      idCliente: '',
      nome: '',
      cpfcnpj: '',
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
      idPedido: '',
      nomePedido: '',
      razaoSocial: '',
      cpfcnpjPedido: '',
      tipoPgto: '',
      cepPedido: '',
      logradouroPedido: '',
      numeroPedido: '',
      complementoPedido: '',
      bairroPedido: '',
      cidadePedido: '',
      estadoPedido: '',
      sfobras: '',
      cno: '',
      ie: '',
      mangueira: '',
      volume: '',
      precoCx5: '',
      precoCx10: '',
      precoCx15: '',
      precoLv5: '',
      precoLv10: '',
      precoLv15: '',
      ajudanteHora: '',
      observacao: ''
    });
  }
}
