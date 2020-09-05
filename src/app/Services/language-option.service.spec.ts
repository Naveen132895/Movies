import { TestBed } from '@angular/core/testing';

import { LanguageOptionService } from './language-option.service';

describe('LanguageOptionService', () => {
  let service: LanguageOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
