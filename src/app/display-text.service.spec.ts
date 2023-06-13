import { TestBed } from '@angular/core/testing';

import { DisplayTextService } from './display-text.service';

describe('DisplayTextService', () => {
  let service: DisplayTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
