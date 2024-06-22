import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = 'http://localhost:2500/pedidos'

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.API)
  }

  criar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.API, pedido)
  }

  editar(pedido: Pedido): Observable<Pedido> {
    const url = `${this.API}/${pedido.id}`
    return this.httpClient.put<Pedido>(url, pedido)
  }

  excluir(id: number): Observable<Pedido> {
    const url = `${this.API}/${id}`
    return this.httpClient.delete<Pedido>(url)
  }

  buscarPorId(id: number): Observable<Pedido> {
    const url = `${this.API}/${id}`
    return this.httpClient.get<Pedido>(url)
  }

}
