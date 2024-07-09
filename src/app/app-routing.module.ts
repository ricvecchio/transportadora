import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent,
  //     },
  //     {
  //       path: 'novousuario',
  //       component: NovoUsuarioComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'menu',
  //   component: MenuComponent
  // },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  // {
  //   path: 'cadastrar-clientes',
  //   component: CadastrarClientesComponent
  // },
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
