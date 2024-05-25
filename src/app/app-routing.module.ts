import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastraClientesComponent } from './componentes/clientes/cadastra-clientes/cadastra-clientes.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';

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
  {
    path: 'cadastra-clientes',
    component: CadastraClientesComponent
  }
  // {
  //   path: 'emite-pedido',
  //   component: EmitePedidoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
