import { ClientesComponent } from './containers/clientes/clientes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AppMaterialModule } from '../compartilhado/app-material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClientesListaComponent } from './componentes/clientes-lista/clientes-lista.component';


@NgModule({
    declarations: [
        ClientesComponent,
        ClienteFormComponent,
        ClientesListaComponent
    ],
    imports: [
        CommonModule,
        ClientesRoutingModule,
        AppMaterialModule,
        CompartilhadoModule,
        ReactiveFormsModule,
        ClientesListaComponent
    ]
})
export class ClientesModule { }
