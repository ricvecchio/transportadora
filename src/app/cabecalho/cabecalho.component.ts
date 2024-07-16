import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { UsuarioService } from '../autenticacao/usuario/usuario.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.css'],
    standalone: true,
    imports: [
        NgIf,
        RouterLink,
        AsyncPipe,
    ],
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
