import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaVeiculosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
