import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitePedidoComponent } from './emite-pedido.component';

describe('EmitePedidoComponent', () => {
  let component: EmitePedidoComponent;
  let fixture: ComponentFixture<EmitePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitePedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmitePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
