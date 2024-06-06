import { NgModule, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { CadastrarClientesComponent } from './componentes/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './componentes/clientes/consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './componentes/clientes/editar-clientes/editar-clientes.component';
import { ExcluirClientesComponent } from './componentes/clientes/excluir-clientes/excluir-clientes.component';
import { CadastrarPedidosComponent } from './componentes/pedidos/cadastrar-pedidos/cadastrar-pedidos.component';
import { ConsultarPedidosComponent } from './componentes/pedidos/consultar-pedidos/consultar-pedidos.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent,
    MenuComponent,
    MensagemComponent,
    CadastrarClientesComponent,
    ConsultarClientesComponent,
    EditarClientesComponent,
    ExcluirClientesComponent,
    CadastrarPedidosComponent,
    ConsultarPedidosComponent,
    EmitePedidoComponent,
    ValidandoCepDirective,
  ],
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
    MatSlideToggleModule,
    _MatSlideToggleRequiredValidatorModule,
    MatButtonModule
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
