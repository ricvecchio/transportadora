import { Routes } from '@angular/router';

import { ClienteResolver } from './cliente.resolver';
import { ClientesComponent } from './containers/clientes/clientes.component';

export const COURSES_ROUTES: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClientesComponent, resolve: { cliente: ClienteResolver } }
];
