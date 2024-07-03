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

  private readonly API = 'api/clientes'
  // private readonly API = 'http://localhost:2000/clientes'
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

  buscarPorId(idPedido: string) {
    const url = `${this.API}/${idPedido}`
    return this.httpClient.get<Pedido>(url)
  }

  editar(pedido: Pedido): Observable<Pedido> {
    const url = `${this.API}/${pedido.idPedido}`
    return this.httpClient.put<Pedido>(url, pedido)
  }

  excluir(idPedido: string) {
    const url = `${this.API}/${idPedido}`
    return this.httpClient.delete<Pedido>(url)
  }

}
