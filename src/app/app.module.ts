import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { MensagemComponent } from './home/mensagem/mensagem.component';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent,
    MensagemComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
