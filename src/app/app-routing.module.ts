import { ConsultarPedidosComponent } from './componentes/pedidos/consultar-pedidos/consultar-pedidos.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastraClientesComponent } from './componentes/clientes/cadastra-clientes/cadastra-clientes.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';
import { CadastrarPedidosComponent } from './componentes/pedidos/cadastrar-pedidos/cadastrar-pedidos.component';
import { ExcluirPedidosComponent } from './componentes/pedidos/excluir-pedidos/excluir-pedidos.component';
import { EditarPedidosComponent } from './componentes/pedidos/editar-pedidos/editar-pedidos.component';

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
  },
  {
    path: 'cadastrar-pedidos',
    component: CadastrarPedidosComponent
  },
  {
    path: 'consultar-pedidos',
    component: ConsultarPedidosComponent
  },
  {
    path: 'pedidos/excluir-pedidos/:id',
    component: ExcluirPedidosComponent
  },
  {
    path: 'pedidos/editar-pedidos/:id',
    component: EditarPedidosComponent
  },
  {
    path: 'emite-pedido',
    component: EmitePedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
