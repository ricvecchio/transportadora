import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:2000/clientes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API)
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente)
  }

  editar(cliente: Cliente): Observable<Cliente> {
    const url = `${this.API}/${cliente.idCliente}`
    return this.http.put<Cliente>(url, cliente )
  }

  excluir(id: number): Observable<Cliente> {
    const url = `${this.API}/${id}`
    return this.http.delete<Cliente>(url)
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.API}/${id}`
    return this.http.get<Cliente>(url)
  }

}
