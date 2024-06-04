import { ConsultarPedidosComponent } from './componentes/pedidos/consultar-pedidos/consultar-pedidos.component';
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
import { ExcluirPedidosComponent } from './componentes/pedidos/excluir-pedidos/excluir-pedidos.component';
import { EditarPedidosComponent } from './componentes/pedidos/editar-pedidos/editar-pedidos.component';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent, RodapeComponent, HomeComponent, LoginComponent, MensagemComponent, NovoUsuarioComponent, MenuComponent, CadastraClientesComponent, ConsultarClientesComponent, CadastrarPedidosComponent, ConsultarPedidosComponent, ExcluirPedidosComponent, EditarPedidosComponent ,EmitePedidoComponent, ValidandoCepDirective],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
