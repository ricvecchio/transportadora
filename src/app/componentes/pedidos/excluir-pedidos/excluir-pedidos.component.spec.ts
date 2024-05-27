import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPedidosComponent } from './excluir-pedidos.component';

describe('ExcluirPedidosComponent', () => {
  let component: ExcluirPedidosComponent;
  let fixture: ComponentFixture<ExcluirPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirPedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
