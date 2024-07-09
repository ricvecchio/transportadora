import { Routes } from '@angular/router';

import { CadastrarPedidosComponent } from '../pedidos/cadastrar-pedidos/cadastrar-pedidos.component';
import { ClienteResolver } from './cliente.resolver';

export const COURSES_ROUTES: Routes = [
  { path: '', component: CadastrarPedidosComponent },
  { path: 'new', component: CadastrarPedidosComponent, resolve: { cliente: ClienteResolver } }
];
