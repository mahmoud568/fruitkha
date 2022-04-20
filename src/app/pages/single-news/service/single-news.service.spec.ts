import { TestBed } from '@angular/core/testing';

import { SingleNewsService } from './single-news.service';

describe('SingleNewsService', () => {
  let service: SingleNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
