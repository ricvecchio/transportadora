import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService, 
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['menu']);
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }
}