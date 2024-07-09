import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClienteResolver } from './guarda-rotas/cliente.resolver';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClienteFormComponent, resolve: { cliente: ClienteResolver} },
  { path: 'edit/:idCliente', component: ClienteFormComponent, resolve: { cliente: ClienteResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
