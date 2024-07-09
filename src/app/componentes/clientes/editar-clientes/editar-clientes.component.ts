import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export class EditarClientesComponent implements OnInit {

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

  editarCliente() {
    this.service.editar(this.cliente).subscribe(() => {
      this.router.navigate(['/consultar-clientes'])
    })
  }

  cancelar() {
    this.router.navigate(['/menu'])
  }

}
