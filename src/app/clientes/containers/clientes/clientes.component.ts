import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ClienteService } from '../../servicos/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError } from 'rxjs';
import { ErrorDialogComponent } from '../../../compartilhado/componentes/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../componentes/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  clientes$: Observable<Cliente[]>;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.clientes$ = this.clienteService.listar()
    // .pipe(
    //   op1.catchError(selector: error => {
    //     this.onError(errorMsg: 'Erro ao carregar clientes.');
    //     return of (...args:[])
    //   })
    // );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente.idCliente], { relativeTo: this.route });
  }

  onDelete(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    // dialogRef.afterClosed().subscribe((result: boolean) => {
    //   if (result) {
    //     this.coursesService.remove(course._id).subscribe(
    //       () => {
    //         this.refresh();
    //         this.snackBar.open('Curso removido com sucesso!', 'X', {
    //           duration: 5000,
    //           verticalPosition: 'top',
    //           horizontalPosition: 'center'
    //         });
    //       },
    //       () => this.onError('Erro ao tentar remover curso.')
    //     );
    //   }
    // });
  }

}
