import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { Pedido } from './pedido';
import { PedidoPage } from './model/pedido-page';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = 'api/pedidos'
  // private readonly API = 'http://localhost:2000/pedidos'
  // private readonly API = '/backend/db.json';

  constructor(private httpClient: HttpClient) { }

  listar(page = 0, pageSize = 10) {
    return this.httpClient.get<Pedido[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(pedidos => console.log(pedidos))
      );
  }

  salvar(pedido: Partial<Pedido>){
    return this.httpClient.post<Pedido>(this.API, pedido);
  }

  buscarPorId(id: string) {
    const url = `${this.API}/${id}`
    return this.httpClient.get<Pedido>(url)
  }

  editar(pedido: Pedido): Observable<Pedido> {
    const url = `${this.API}/${pedido.id}`
    return this.httpClient.put<Pedido>(url, pedido)
  }

  excluir(id: string) {
    const url = `${this.API}/${id}`
    return this.httpClient.delete<Pedido>(url)
  }

}
