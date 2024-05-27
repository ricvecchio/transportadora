import { Pedido } from './pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = 'http://localhost:2000/pedidos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API)
  }

  criar(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.API, pedido)
  }

  editar(pedido: Pedido): Observable<Pedido> {
    const url = `${this.API}/${pedido.id}`
    return this.http.put<Pedido>(url, pedido )
  }

  excluir(id: number): Observable<Pedido> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pedido>(url)
  }

  buscarPorId(id: number): Observable<Pedido> {
    const url = `${this.API}/${id}`
    return this.http.get<Pedido>(url)
  }

}
