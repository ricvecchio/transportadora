import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
