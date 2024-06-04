import { EditarClientesComponent } from './componentes/clientes/editar-clientes/editar-clientes.component';
import { ConsultarClientesComponent } from './componentes/clientes/consultar-clientes/consultar-clientes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';
import { CadastrarClientesComponent } from './componentes/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ExcluirClientesComponent } from './componentes/clientes/excluir-clientes/excluir-clientes.component';
import { ConsultarPedidosComponent } from './componentes/pedidos/consultar-pedidos/consultar-pedidos.component';
import { CadastrarPedidosComponent } from './componentes/pedidos/cadastrar-pedidos/cadastrar-pedidos.component';

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
    path: 'cadastrar-clientes',
    component: CadastrarClientesComponent
  },
  {
    path: 'consultar-clientes',
    component: ConsultarClientesComponent
  },
  {
    path: 'clientes/editar-clientes/:id',
    component: EditarClientesComponent
  },
  {
    path: 'clientes/excluir-clientes/:id',
    component: ExcluirClientesComponent
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
    path: 'pedidos/emite-pedido',
    component: EmitePedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
