import { TestBed } from '@angular/core/testing';

import { DropdownToggleService } from './dropdown-toggle.service';

describe('DropdownToggleService', () => {
  let service: DropdownToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
