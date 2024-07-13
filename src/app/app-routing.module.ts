import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { ClienteFormComponent } from './clientes/containers/cliente-form/cliente-form.component';
import { ClientesListaComponent } from './clientes/componentes/clientes-lista/clientes-lista.component';
import { ClienteResolver } from './clientes/guarda-rotas/cliente.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
    ],
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  { path: 'cadastrar-cliente', component: ClienteFormComponent, resolve: { cliente: ClienteResolver} },
  { path: 'consultar-clientes', component: ClientesListaComponent, resolve: { cliente: ClienteResolver} },
  { path: 'editar-cliente/:idCliente', component: ClienteFormComponent, resolve: { cliente: ClienteResolver} },

  // {
  //   path: 'clientes',
  //   loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  // },

  // { path: 'deletar-cliente/:idCliente', component: ClientesListaComponent, resolve: { cliente: ClienteResolver} },
  // {
  //   path: 'clientes/editar-clientes/:id',
  //   component: EditarClientesComponent
  // },
  // {
  //   path: 'clientes/excluir-clientes/:id',
  //   component: ExcluirClientesComponent
  // },
  // {
  //   path: 'cadastrar-pedidos',
  //   component: CadastrarPedidosComponent
  // },
  // {
  //   path: 'consultar-pedidos',
  //   component: ConsultarPedidosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
