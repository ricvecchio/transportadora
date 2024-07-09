import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '', component: ClientesComponent
  },
  {
    path: 'new', component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
