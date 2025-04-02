import { TestBed } from '@angular/core/testing';

import { DadosFormularioService } from './dados-formulario.service';

describe('DadosFormularioService', () => {
  let service: DadosFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
