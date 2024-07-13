import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { MensagemComponent } from './home/mensagem/mensagem.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ClientesListaComponent } from './clientes/componentes/clientes-lista/clientes-lista.component';
import { ClienteFormComponent } from './clientes/containers/cliente-form/cliente-form.component';
import { AppMaterialModule } from './compartilhado/app-material.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { MatNativeDateModule } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

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
    ClienteFormComponent,
    ClientesListaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    AppMaterialModule,
    CompartilhadoModule
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
