import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';


@NgModule({
  declarations: [ListaVeiculosComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ]
})
export class VeiculosModule { }
