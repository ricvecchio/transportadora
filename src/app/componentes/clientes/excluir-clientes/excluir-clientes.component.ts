import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-clientes',
  templateUrl: './excluir-clientes.component.html',
  styleUrl: './excluir-clientes.component.css'
})
export class ExcluirClientesComponent implements OnInit {

  cliente: Cliente = {
    idCliente: '',
    nome: '',
    cpfcnpj: '',
    telefone: '',
    celular:  '',
    email:  '',
    cep:  '',
    logradouro:  '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idCliente')
    this.service.buscarPorId(parseInt(id!)).subscribe((cliente) => {
      this.cliente = cliente
    })
  }

  // excluirCliente() {
  //   if(this.cliente.idCliente) {
  //     this.service.excluir(this.cliente.id).subscribe(() => {
  //       this.router.navigate(['/consultar-cliente'])
  //     })
  //   }
  // }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
