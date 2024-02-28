import { TestBed } from '@angular/core/testing';

import { ModalToggleService } from './modal-toggle.service';

describe('ModalToggleService', () => {
  let service: ModalToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
