import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../directives/error-dialog/error-dialog.component';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

export interface UserData {
  id: string;
  nome: string;
  endereco: string;
  volume: string;
  mangueira: string;
  valor: string;
  status: string;
  acao: string;
}

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit {

  pedidos$: Observable<Pedido[]>;
  readonly displayedColumns: string[] = [
    'id',
    'nome',
    'endereco',
    'volume',
    'mangueira',
    'valor',
    'status',
    'acao'
  ];


  constructor(
    private pedidosService: PedidoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pedidos$ = this.pedidosService.listar().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os pedidos.');
        return of([]);
      }),
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});

    }

}
