import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:2000/clientes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  buscarPorId(idCliente: number): Observable<Cliente> {
    const url = `${this.API}/${idCliente}`
    return this.http.get<Cliente>(url)
  }

  salvar(cliente: Partial<Cliente>) {
    if (cliente.idCliente) {
      return this.editar(cliente);
    }
    return this.criar(cliente);
  }

  private criar(cliente: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, cliente).pipe(first());
  }

  private editar(cliente: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/${cliente.idCliente}`, cliente).pipe(first());
  }

  excluir(idCliente: string) {
    return this.http.delete(`${this.API}/${idCliente}`).pipe(first());
  }

  // salvar(cliente: Partial<Cliente>) {
  //   return this.http.post<Cliente>(this.API, cliente);
  // }

  // editar(cliente: Cliente): Observable<Cliente> {
  //   const url = `${this.API}/${cliente.idCliente}`
  //   return this.http.put<Cliente>(url, cliente )
  // }

  // excluir(id: number): Observable<Cliente> {
  //   const url = `${this.API}/${id}`
  //   return this.http.delete<Cliente>(url)
  // }
}