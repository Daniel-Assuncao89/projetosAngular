import { TestBed } from '@angular/core/testing';

import { LocalidadeApiService } from './localidade-api.service';

describe('LocalidadeApiService', () => {
  let service: LocalidadeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalidadeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
