import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterService } from './footer.service';

describe('FooterService', () => {
  let service: FooterService;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule, RouterTestingModule ],});
    service = TestBed.inject(FooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
