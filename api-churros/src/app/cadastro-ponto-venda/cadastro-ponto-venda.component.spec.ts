import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPontoVendaComponent } from './cadastro-ponto-venda.component';

describe('CadastroPontoVendaComponent', () => {
  let component: CadastroPontoVendaComponent;
  let fixture: ComponentFixture<CadastroPontoVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPontoVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPontoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
