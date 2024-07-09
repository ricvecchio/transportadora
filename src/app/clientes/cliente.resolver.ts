import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ClienteService } from './servicos/cliente.service';
import { Cliente } from './modelo/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteResolver {
  constructor(private service: ClienteService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Cliente> {
    if (route.params && route.params['idCliente']) {
      return this.service.buscarPorId(route.params['idCliente']);
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
      pedidos: []
    });
  }
}
