import { AsyncPipe } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { _MatSlideToggleRequiredValidatorModule, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CadastrarClientesComponent } from './componentes/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './componentes/clientes/consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './componentes/clientes/editar-clientes/editar-clientes.component';
import { ExcluirClientesComponent } from './componentes/clientes/excluir-clientes/excluir-clientes.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CadastrarPedidosComponent } from './componentes/pedidos/cadastrar-pedidos/cadastrar-pedidos.component';
import { ConsultarPedidosComponent } from './componentes/pedidos/consultar-pedidos/consultar-pedidos.component';
import { EmitePedidoComponent } from './componentes/pedidos/emite-pedido/emite-pedido.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    provideMomentDateAdapter()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
