import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import {
  ConfirmationDialogComponent,
} from '../../../compartilhado/componentes/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from '../../../compartilhado/componentes/error-dialog/error-dialog.component';
import { Cliente } from '../../modelo/cliente';
import { ClienteService } from '../../servicos/cliente.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit {

  clientes$: Observable<Cliente[]> | null = null;
  readonly displayedColumns: string[] = [
    'idCliente',
    'nome',
    'telefone',
    'email',
    'acao'
  ];

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
    this.atualiza();
  }

  atualiza() {
    this.clientes$ = this.clienteService.listar().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar clientes.');
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
    this.router.navigate(['/cadastrar-cliente'], { relativeTo: this.route });
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['/editar-cliente/', cliente.idCliente], {
      relativeTo: this.route,
    });
  }

  onDelete(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse cliente?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clienteService.excluir(cliente.idCliente).subscribe(
          () => {
            this.atualiza();
            this.snackBar.open('Cliente removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('Erro ao tentar remover cliente.'),
        );
      }
    });
  }

  // @Input() clientes: Cliente[] = [];
  // @Output() add = new EventEmitter(false);
  // @Output() edit = new EventEmitter(false);
  // @Output() remove = new EventEmitter(false);

}
