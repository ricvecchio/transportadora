import { ConsultarClientesComponent } from './componentes/clientes/consultar-clientes/consultar-clientes.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CadastraClientesComponent } from './componentes/clientes/cadastra-clientes/cadastra-clientes.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';
import { CadastrarPedidosComponent } from './componentes/pedidos/cadastrar-pedidos/cadastrar-pedidos.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent, RodapeComponent, HomeComponent, LoginComponent, MensagemComponent, NovoUsuarioComponent, MenuComponent, CadastraClientesComponent, ConsultarClientesComponent, CadastrarPedidosComponent ,EmitePedidoComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
