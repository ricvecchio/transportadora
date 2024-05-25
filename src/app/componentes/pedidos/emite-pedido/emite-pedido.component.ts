import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emite-pedido',
  templateUrl: './emite-pedido.component.html',
  styleUrl: './emite-pedido.component.css'
})
export class EmitePedidoComponent implements OnInit {

  @Input() pedido = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  // larguraPensamento(): string {
  //   if(this.pensamento.conteudo.length >= 256) {
  //     return 'pensamento-g'
  //   }
  //   return 'pensamento-p'
  // }

}
