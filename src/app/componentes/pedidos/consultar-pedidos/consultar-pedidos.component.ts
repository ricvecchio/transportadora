import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  nome: string;
  endereco: string;
  volume: string;
  mangueira: string;
  valor: string;
  status: string;
  acao: string;
}

const NOMES: string[] = [
  'Ricardo Del Vecchio',
  'Melina Kubo',
  'Paulo de Oliveira',
  'Carlos Alberto',
  'Erick Souza',
  'Paulo Nunes',
  'Condominio Costa do Sol',
  'Condominio Turquesa',
  'Condominio Azaleia',
  'Condominio Samambaia',
  'Condominio Lurdes',
  'Condominio Mome',
  'Condominio Ipiranga',
  'Condominio Saúde',
  'Condominio Eldorado',
  'Condominio Anchieta',
  'Condominio Imigrantes',
  'Condominio Conceição',
  'Condominio Santos',
];
const ENDERECOS: string[] = [
  'Rua Quinze de Setembro, 50 - Vila Saúde/SP',
  'Rua Samambaia, 571 - Saúde/SP',
  'Rua Maria Whitaquer, 10 - Mirandópolis/SP',
  'Rua das Conchas, 244 - Santo André/SP',
  'Rua Quinze de Setembro, 50 - Vila Saúde/SP',
  'Rua Samambaia, 571 - Saúde/SP',
  'Rua Maria Whitaquer, 10 - Mirandópolis/SP',
  'Rua das Conchas, 244 - Santo André/SP',
  'Rua Quinze de Setembro, 50 - Vila Saúde/SP',
  'Rua Samambaia, 571 - Saúde/SP',
  'Rua Maria Whitaquer, 10 - Mirandópolis/SP',
  'Rua das Conchas, 244 - Santo André/SP',
  'Rua Quinze de Setembro, 50 - Vila Saúde/SP',
  'Rua Samambaia, 571 - Saúde/SP',
  'Rua Maria Whitaquer, 10 - Mirandópolis/SP',
  'Rua das Conchas, 244 - Santo André/SP',
  'Rua Quinze de Setembro, 50 - Vila Saúde/SP',
  'Rua Samambaia, 571 - Saúde/SP',
  'Rua Maria Whitaquer, 10 - Mirandópolis/SP',
  'Rua das Conchas, 244 - Santo André/SP',
];
const VOLUMES: string[] = [
  'cx-5m³',
  'cx-10m³',
  'cx-15m³',
  'lav-5m³',
  'lav-10m³',
  'lav-15m³',
];
const MANGUEIRAS: string[] = [
  '15 Metros',
  '30 Metros',
  '45 Metros',
  '60 Metros',
  '75 Metros',
  '90 Metros',
];
const VALORES: string[] = [
  'R$ 150,00',
  'R$ 130,00',
  'R$  80,00',
  'R$  50,00',
  'R$ 110,00',
  'R$  29,00',
];
const STATUS: string[] = [
  'Em aberto',
  'Pedido Emitido',
  'Pedido Emitido',
  'Pedido Emitido',
  'Em aberto',
  'Em aberto',
  'Pedido Emitido',
];

const ACOES: string[] = [
  '⋮',
];


@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css',
})
export class ConsultarPedidosComponent implements OnInit {
  // listaPedidos: Pedido[] = [];

  // constructor(private service: PedidoService) { }

  // ngOnInit(): void {
  //   this.service.listar().subscribe((listaPedidos) => {
  //     this.listaPedidos = listaPedidos
  //   })
  // }
  ngOnInit(): void {}

  displayedColumns: string[] = ['id', 'nome', 'endereco', 'volume', 'mangueira', 'valor', 'status', 'acao'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
  const nome =
    NOMES[Math.round(Math.random() * (NOMES.length - 1))] +
    ' ' +
    NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    nome: nome,
    endereco: ENDERECOS[Math.round(Math.random() * (VOLUMES.length - 1))],
    volume: VOLUMES[Math.round(Math.random() * (VOLUMES.length - 1))],
    mangueira: MANGUEIRAS[Math.round(Math.random() * (MANGUEIRAS.length - 1))],
    valor: VALORES[Math.round(Math.random() * (VALORES.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    acao: ACOES[Math.round(Math.random() * (STATUS.length - 1))],
  };
}

