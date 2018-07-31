import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProfissaoComponent } from './cad-profissao.component';

describe('CadProfissaoComponent', () => {
  let component: CadProfissaoComponent;
  let fixture: ComponentFixture<CadProfissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadProfissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadProfissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
