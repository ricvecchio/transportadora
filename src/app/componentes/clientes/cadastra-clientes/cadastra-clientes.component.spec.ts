import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraClientesComponent } from './cadastra-clientes.component';

describe('CadastraClientesComponent', () => {
  let component: CadastraClientesComponent;
  let fixture: ComponentFixture<CadastraClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastraClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
