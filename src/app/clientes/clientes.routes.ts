import { Routes } from '@angular/router';

import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClienteResolver } from './guarda-rotas/cliente.resolver';

export const COURSES_ROUTES: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClientesComponent, resolve: { cliente: ClienteResolver } }
];
