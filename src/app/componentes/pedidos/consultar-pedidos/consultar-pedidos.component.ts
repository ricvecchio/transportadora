import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, of } from 'rxjs';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../directives/error-dialog/error-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  displayedColumns: string[] = [
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
